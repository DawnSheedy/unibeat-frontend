import { TileCoord } from "../types/TileCoord";

export const useAnimationDelayForCoords = (coords: TileCoord, multiply = 100) => {
    return `${((coords.col + coords.row)*multiply)}ms`
}