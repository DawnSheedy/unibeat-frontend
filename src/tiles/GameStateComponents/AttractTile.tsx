import classNames from "classnames";
import { useAnimationDelayForCoords } from "../../hooks/useAnimationDelayForCoords";
import { TileComponentProps } from "../../types/TileComponentProps";
import "./AttractTile.scss";

export const AttractTile = ({ isLeaving, coords }: TileComponentProps) => {
  const animDelay = useAnimationDelayForCoords(coords, 450);
  const normalAnimDelay = useAnimationDelayForCoords(coords);
  return (
    <div
      className={classNames("generic-tile-container", { hide: isLeaving })}
      style={{ transitionDelay: normalAnimDelay }}
    >
      <div
        className={classNames("attract-tile", { end: isLeaving })}
        style={{ animationDelay: animDelay }}
      ></div>
    </div>
  );
};
