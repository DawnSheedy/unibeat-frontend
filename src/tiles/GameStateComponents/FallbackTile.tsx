import classNames from "classnames";
import { TileComponentProps } from "../../types/TileComponentProps";
import "./GenericTileStyles.scss";
import "./FallbackTile.scss";
import { useGameState } from "../../hooks/useGameState";
import { useAnimationDelayForCoords } from "../../hooks/useAnimationDelayForCoords";

export const FallbackTile = ({
  coords,
  isLeaving,
  debugKey,
}: TileComponentProps) => {
  const { gameState, lastState } = useGameState();
  const animDelay = useAnimationDelayForCoords(coords);
  return (
    <div
      className={classNames("fallback-tile", { 'soft-exit': isLeaving, 'soft-enter': !isLeaving })}
      style={{ transitionDelay: animDelay, animationDelay: animDelay }}
    >
      <div className="error-msg">
        💔 No Tile Component Definition for GameState:{" "}
        {isLeaving ? lastState : gameState}
      </div>
      <div>
        col: {coords.col}, row: {coords.row}
      </div>
      <div className="key-display">comp-key: {debugKey}</div>
    </div>
  );
};
