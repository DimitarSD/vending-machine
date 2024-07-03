import { useState, useCallback, useEffect } from "react";
import { useVendingMachineState } from "./useVendingMachineContext";
import type { ProductItem } from "./../types/ProductItem.props";

const useProductSelection = (
  onProductSelect: (name: string, price: number) => void
) => {
  const state = useVendingMachineState();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProduct !== null) {
      const product = state.products.find((p: ProductItem) => {
        const productId = Number(p.id);
        return productId === selectedProduct;
      });
      if (product) {
        onProductSelect(product.name, product.price);
      } else {
        setSelectedProduct(null);
      }
    } else {
      onProductSelect("", 0);
    }
  }, [selectedProduct, state.products, onProductSelect]);

  const handleProductChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const productId = parseInt(e.target.value, 10);
      setSelectedProduct(productId);
    },
    []
  );

  return {
    selectedProduct,
    handleProductChange,
    productOptions: state.products,
  };
};

export default useProductSelection;
