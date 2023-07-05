import { CommonGameStateComponentProps } from "./CommonGameStateComponentProps";
import { TileCoord } from "./TileCoord";

interface _TileComponentProps {
  coords: TileCoord;
}

export type TileComponentProps = CommonGameStateComponentProps &
  _TileComponentProps;
