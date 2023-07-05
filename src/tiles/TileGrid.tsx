import "./TileGrid.scss";
import TileConfig from "../config.json";
import { ConfigJSON } from "../types/ConfigJSON";
import { TileCoord } from "../types/TileCoord";
import { Tile } from "./Tile";

const config = TileConfig as ConfigJSON;

const tileIds = [0, 1, 2, 3];

const coords: TileCoord[] = [];

tileIds.forEach((col) => {
  tileIds.forEach((row) => {
    coords.push({ col, row });
  });
});

export const TileGrid = () => {
  return (
    <div
      className="tile-grid"
      style={{
        height: config.tileConfig.tileAreaSize,
        width: config.tileConfig.tileAreaSize,
        left: config.tileConfig.xOffset,
        right: config.tileConfig.yOffset,
        gap: config.tileConfig.gutterWidth,
      }}
    >
      {coords.map((coordinate, index) => (
        <Tile key={index} coord={coordinate} />
      ))}
    </div>
  );
};
