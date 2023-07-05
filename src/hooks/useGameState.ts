import { useAppSelector } from "../redux/hooks";
import {
  selectGameState,
  selectLastState,
} from "../redux/slices/interfaceSlice";

/**
 * Hook to get current and previous game state
 * @returns
 */
export const useGameState = () => {
  const gameState = useAppSelector(selectGameState);
  const lastState = useAppSelector(selectLastState);
  return { gameState, lastState };
};
