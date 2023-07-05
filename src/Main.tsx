import "./App.scss";
import { Marquee } from "./marquee/Marquee";
import { TileGrid } from "./tiles/TileGrid";

export const Main = () => {
  return (
    <div>
      <div className="marquee-container"><Marquee /></div>
      <div className="tile-container"><TileGrid /></div>
    </div>
  );
};
