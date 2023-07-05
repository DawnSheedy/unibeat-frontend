import classNames from "classnames";
import "../../tiles/GameStateComponents/FallbackTile.scss";
import { useGameState } from "../../hooks/useGameState";
import { CommonGameStateComponentProps } from "../../types/CommonGameStateComponentProps";

export const FallbackMarquee = ({
  isLeaving,
  debugKey,
}: CommonGameStateComponentProps) => {
  const { gameState, lastState } = useGameState();
  return (
    <div
      className={classNames("fallback-tile", { 'soft-exit': isLeaving, 'soft-enter': !isLeaving })}
    >
      <div className="error-msg">
        💔 No Marquee Component Definition for GameState:{" "}
        {isLeaving ? lastState : gameState}
      </div>
      <div className="key-display">comp-key: {debugKey}</div>
    </div>
  );
};
