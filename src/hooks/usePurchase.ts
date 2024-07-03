import { useCallback } from "react";
import {
  useVendingMachineState,
  useVendingMachineDispatch,
} from "./useVendingMachineContext";
import type { ProductItem } from "./../types/ProductItem.props";

const usePurchase = (
  selectedProduct: number | null,
  onPurchase: (change: number) => void
) => {
  const state = useVendingMachineState();
  const dispatch = useVendingMachineDispatch();

  const handlePurchase = useCallback(() => {
    if (selectedProduct === null) {
      alert("Please select a product first.");
      return;
    }

    const product = state.products.find(
      (product: ProductItem) => Number(product.id) === selectedProduct
    );

    if (product) {
      if (product.quantity > 0 && state.insertedCoins >= product.price) {
        const change = state.insertedCoins - product.price;

        dispatch({ type: "BUY_PRODUCT", payload: product.id });
        onPurchase(change);
      } else if (product.quantity <= 0) {
        alert("This product is out of stock.");
      } else {
        alert("Insufficient funds.");
      }
    } else {
      alert("Product not found.");
    }
  }, [
    selectedProduct,
    state.products,
    state.insertedCoins,
    dispatch,
    onPurchase,
  ]);

  return handlePurchase;
};

export default usePurchase;
