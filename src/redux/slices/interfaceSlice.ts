import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GameState } from "../../types/GameState";

export interface InterfaceStateType {
  gameState: GameState;
  lastState: GameState | null;
}

const initialState: InterfaceStateType = {
  gameState: GameState.Attract,
  lastState: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.lastState = state.gameState;
      state.gameState = action.payload;
    },
  },
});

export const { setGameState } = interfaceSlice.actions;

export const selectGameState = (state: RootState) => state.interface.gameState;

export const selectLastState = (state: RootState) => state.interface.lastState;

export default interfaceSlice.reducer;
