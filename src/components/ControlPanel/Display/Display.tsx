import styles from "./Display.module.css";

import type { DisplayProps } from "./../../../types/Display.props";

const Display = ({
  displayProduct,
  displayCredit,
  displayLabel,
}: DisplayProps) => {
  return (
    <div className={styles.display}>
      <div className={styles.displayItemPrice}>
        {displayProduct ? (
          <>
            <div>{displayProduct.name}</div>
            <div className="price">{displayProduct.price.toFixed(2)} BGN</div>
          </>
        ) : (
          <>
            <div>-</div>
            <div className="price">-</div>
          </>
        )}
      </div>
      <div className={styles.displayItemCredit}>
        <div>{displayLabel}</div>
        <div className="credit">{displayCredit.toFixed(2)} BGN</div>
      </div>
    </div>
  );
};

export default Display;
