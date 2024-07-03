import useProductSelection from "./../../../hooks/useProductSelection";
import usePurchase from "./../../../hooks/usePurchase";
import styles from "./PurchaseButton.module.css";

import type { PurchaseButtonProps } from "./../../../types/PurchaseButtonProps.props";
import type { ProductItem } from "./../../../types/ProductItem.props";

const PurchaseButton = ({ onProductSelect, onPurchase }: PurchaseButtonProps) => {
  const { selectedProduct, handleProductChange, productOptions } = useProductSelection(onProductSelect);
  const handlePurchase = usePurchase(selectedProduct, onPurchase);

  return (
    <div className={styles.purchaseButton}>
      <select value={selectedProduct ?? ""} onChange={handleProductChange}>
        <option value="">Select a product</option>
        {productOptions.map((product: ProductItem) => (
          <option key={product.id} value={product.id}>
            {product.name} - {product.price.toFixed(2)} BGN
          </option>
        ))}
      </select>
      <button onClick={handlePurchase}>Buy</button>
    </div>
  );
};

export default PurchaseButton;