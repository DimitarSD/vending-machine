import { useVendingMachineState } from "./../../hooks/useVendingMachineContext";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./ProductList.module.css";

import type { ProductItem as ProductItemType } from "./../../types/ProductItem.props";

const ProductList = () => {
  const state = useVendingMachineState();

  return (
    <div className={styles.productList}>
      {state.products.map((product: ProductItemType) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
