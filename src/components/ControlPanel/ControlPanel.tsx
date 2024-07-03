import { useEffect } from "react";
import CoinInput from "./CoinInput/CoinInput";
import PurchaseButton from "./PurchaseButton/PurchaseButton";
import ResetButton from "./ResetButton/ResetButton";
import Display from "./Display/Display";
import styles from "./ControlPanel.module.css";
import { useVendingMachineState } from "./../../hooks/useVendingMachineContext";
import useDisplayState from "./../../hooks/useDisplayState";

const ControlPanel = () => {
  const state = useVendingMachineState();
  const {
    displayProduct,
    displayCredit,
    displayLabel,
    handleProductSelection,
    handleCoinInsertion,
    handlePurchase,
    resetDisplay,
  } = useDisplayState();

  useEffect(() => {
    if (state.insertedCoins === 0 && displayLabel === "CREDIT") {
      resetDisplay();
    }
  }, [state.insertedCoins, displayLabel, resetDisplay]);

  return (
    <div className={styles.controlPanel}>
      <Display
        displayProduct={displayProduct}
        displayCredit={displayCredit}
        displayLabel={displayLabel}
      />
      <CoinInput onCoinInsert={handleCoinInsertion} />
      <PurchaseButton
        onProductSelect={handleProductSelection}
        onPurchase={handlePurchase}
      />
      <ResetButton />
    </div>
  );
};

export default ControlPanel;
