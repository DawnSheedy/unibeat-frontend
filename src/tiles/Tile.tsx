import { TileCoord } from "../types/TileCoord";
import "./Tile.scss";

export interface TileProps {
  coord: TileCoord;
}

export const Tile = ({ coord }: TileProps) => {
  return (
    <div className="tile" style={{ gridColumn: coord.col + 1, gridRow: coord.row + 1}}>
      <h1>Tile</h1>
      <h2>Column: {coord.col}</h2>
      <h2>Row: {coord.row}</h2>
    </div>
  );
};
