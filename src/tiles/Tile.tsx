import { Fragment, useEffect, useState } from "react";
import { useGameState } from "../hooks/useGameState";
import { TileCoord } from "../types/TileCoord";
import "./Tile.scss";
import { TileComponent } from "../types/TileComponent";
import { TileComponents } from "../pages/PageComponents";
import { FallbackTile } from "./GameStateComponents/FallbackTile";
import { getUuid } from "../utils/getUuid";

export interface TileProps {
  coord: TileCoord;
}

export const Tile = ({ coord }: TileProps) => {
  const { gameState, lastState } = useGameState();
  const [_ComponentOne, setComponentOne] = useState<{
    Component: TileComponent;
    key: string;
  } | null>(null);
  const [_ComponentTwo, setComponentTwo] = useState<{
    Component: TileComponent;
    key: string;
  } | null>(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const oldComp1 = _ComponentOne;
    setComponentTwo(oldComp1);
    setComponentOne({
      Component: TileComponents[gameState] ?? FallbackTile,
      key: getUuid(),
    });
    setFlip(!flip);
  }, [gameState]);

  const ComponentOne = flip ? _ComponentTwo : _ComponentOne;
  const ComponentTwo = flip ? _ComponentOne : _ComponentTwo;

  return (
    <Fragment>
      <div
        className="tile"
        style={{ gridColumn: coord.col + 1, gridRow: coord.row + 1 }}
      >
        {ComponentOne === null ? (
          ""
        ) : (
          <ComponentOne.Component
            coords={coord}
            key={ComponentOne.key}
            isLeaving={flip}
            debugKey={ComponentOne.key}
          />
        )}
      </div>
      <div
        className="tile"
        style={{ gridColumn: coord.col + 1, gridRow: coord.row + 1 }}
      >
        {ComponentTwo === null ? (
          ""
        ) : (
          <ComponentTwo.Component
            coords={coord}
            key={ComponentTwo.key}
            isLeaving={!flip}
            debugKey={ComponentTwo.key}
          />
        )}
      </div>
    </Fragment>
  );
};
