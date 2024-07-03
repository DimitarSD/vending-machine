import { useState, useCallback, useEffect } from "react";
import type { DisplayProduct } from "./../types/DisplayProduct.props";

const useDisplayState = () => {
  const [displayProduct, setDisplayProduct] = useState<DisplayProduct | null>(
    null
  );
  const [displayCredit, setDisplayCredit] = useState<number>(0);
  const [displayLabel, setDisplayLabel] = useState<string>("CREDIT");

  useEffect(() => {
    if (displayLabel === "CHANGE") {
      const timer = setTimeout(() => {
        setDisplayProduct(null);
        setDisplayCredit(0);
        setDisplayLabel("CREDIT");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [displayLabel]);

  const handleProductSelection = useCallback(
    (productName: string, productPrice: number) => {
      setDisplayProduct({ name: productName, price: productPrice });
    },
    []
  );

  const handleCoinInsertion = useCallback((totalInserted: number) => {
    setDisplayCredit(totalInserted);
  }, []);

  const handlePurchase = useCallback((change: number) => {
    if (change > 0) {
      setDisplayLabel("CHANGE");
      setDisplayCredit(change);
    } else {
      setDisplayLabel("CREDIT");
      setDisplayCredit(0);
    }
    setDisplayProduct(null);
  }, []);

  const resetDisplay = useCallback(() => {
    setDisplayProduct(null);
    setDisplayCredit(0);
    setDisplayLabel("CREDIT");
  }, []);

  return {
    displayProduct,
    displayCredit,
    displayLabel,
    handleProductSelection,
    handleCoinInsertion,
    handlePurchase,
    resetDisplay,
  };
};

export default useDisplayState;
