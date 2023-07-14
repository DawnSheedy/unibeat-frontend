import { useEffect } from "react";
import "./App.scss";
import { useGameState } from "./hooks/useGameState";
import { Marquee } from "./marquee/Marquee";
import { useAppDispatch } from "./redux/hooks";
import { TileGrid } from "./tiles/TileGrid";
import {
  setGameState,
} from "./redux/slices/interfaceSlice";
import { GameState } from "./types/GameState";

export const Main = () => {
  const { gameState } = useGameState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(
        setGameState(
          gameState === GameState.Attract ? GameState.Debug : GameState.Attract
        )
      );
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className="app-container">
      <div className="marquee-container">
        <Marquee />
      </div>
      <div className="tile-container">
        <TileGrid />
      </div>
    </div>
  );
};
