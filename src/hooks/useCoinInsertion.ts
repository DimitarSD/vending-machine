import { useState, useMemo, useCallback } from "react";
import {
  useVendingMachineState,
  useVendingMachineDispatch,
} from "./useVendingMachineContext";

const useCoinInsertion = (onCoinInsert: (totalInserted: number) => void) => {
  const state = useVendingMachineState();
  const dispatch = useVendingMachineDispatch();
  const [coin, setCoin] = useState<string>("");

  const handleInsert = useCallback(() => {
    const coinValue = parseFloat(coin);

    if (coinValue > 0) {
      dispatch({ type: "INSERT_COINS", payload: coinValue });
      onCoinInsert(state.insertedCoins + coinValue);
      setCoin("");
    }
  }, [coin, state.insertedCoins, dispatch, onCoinInsert]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCoin(e.target.value);
    },
    []
  );

  const coinOptions = useMemo(
    () => [
      { value: "", label: "Select Coin" },
      { value: "0.10", label: "0.10 BGN" },
      { value: "0.20", label: "0.20 BGN" },
      { value: "0.50", label: "0.50 BGN" },
      { value: "1.00", label: "1.00 BGN" },
      { value: "2.00", label: "2.00 BGN" },
    ],
    []
  );

  return {
    coin,
    handleChange,
    handleInsert,
    coinOptions,
  };
};

export default useCoinInsertion;
