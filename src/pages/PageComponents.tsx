import { AttractTile } from "../tiles/GameStateComponents/AttractTile";
import { GameState } from "../types/GameState";
import { MarqueeComponent } from "../types/MarqueeComponent";
import { TileComponent } from "../types/TileComponent";

export const MarqueeComponents: { [key in GameState]?: MarqueeComponent } = {
}

export const TileComponents: { [key in GameState]?: TileComponent } = {
    [GameState.Attract]: AttractTile
}