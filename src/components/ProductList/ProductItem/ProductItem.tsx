import { FaCoins, FaBox } from "react-icons/fa";
import styles from "./ProductItem.module.css";

import type { ProductItem as ProductItemType } from "./../../../types/ProductItem.props";

const ProductItem = ({ id, name, price, quantity, image }: ProductItemType) => {
  return (
    <div
      className={`${styles.productItem} ${
        quantity === 0 ? styles.outOfStock : ""
      }`}
    >
      <img src={image} alt={name} />
      <div className={styles.productInfo}>{name}</div>
      <div className={styles.productIcons}>
        <div className={styles.productPrice}>
          <FaCoins /> {price.toFixed(2)} BGN
        </div>
        <div className={styles.productQuantity}>
          <FaBox /> {quantity}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
