import { useState, useEffect, Fragment } from "react";
import { useGameState } from "../hooks/useGameState";
import { MarqueeComponents, TileComponents } from "../pages/PageComponents";
import "./Marquee.scss"
import { getUuid } from "../utils/getUuid";
import { MarqueeComponent } from "../types/MarqueeComponent";
import { FallbackMarquee } from "./GameStateComponents/FallbackMarquee";

export const Marquee = () => {
  const { gameState, lastState } = useGameState();
  const [_ComponentOne, setComponentOne] = useState<{
    Component: MarqueeComponent;
    key: string;
  } | null>(null);
  const [_ComponentTwo, setComponentTwo] = useState<{
    Component: MarqueeComponent;
    key: string;
  } | null>(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const oldComp1 = _ComponentOne;
    setComponentTwo(oldComp1);
    setComponentOne({
      Component: MarqueeComponents[gameState] ?? FallbackMarquee,
      key: getUuid(),
    });
    setFlip(!flip);
  }, [gameState]);

  const ComponentOne = flip ? _ComponentTwo : _ComponentOne;
  const ComponentTwo = flip ? _ComponentOne : _ComponentTwo;

  return (
    <div className="marquee-grid">
      <div className="marquee">
        {ComponentOne === null ? (
          ""
        ) : (
          <ComponentOne.Component
            key={ComponentOne.key}
            isLeaving={flip}
            debugKey={ComponentOne.key}
          />
        )}
      </div>
      <div className="marquee">
        {ComponentTwo === null ? (
          ""
        ) : (
          <ComponentTwo.Component
            key={ComponentTwo.key}
            isLeaving={!flip}
            debugKey={ComponentTwo.key}
          />
        )}
      </div>
    </div>
  );
};
