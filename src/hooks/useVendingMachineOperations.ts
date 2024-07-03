import { useCallback } from "react";
import { useVendingMachineState, useVendingMachineDispatch } from "./useVendingMachineContext";

const useVendingMachineOperations = () => {
  const { state } = useVendingMachineState();
  const dispatch = useVendingMachineDispatch();

  const insertCoins = useCallback((amount: number) => {
    dispatch({ type: "INSERT_COINS", payload: amount });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  const buyProduct = useCallback((productId: number) => {
    dispatch({ type: "BUY_PRODUCT", payload: productId });
  }, [dispatch]);

  return {
    state,
    insertCoins,
    reset,
    buyProduct,
  };
};

export default useVendingMachineOperations;