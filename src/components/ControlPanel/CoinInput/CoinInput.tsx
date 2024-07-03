import useCoinInsertion from "./../../../hooks/useCoinInsertion";
import styles from "./CoinInput.module.css";

import type { CoinInputProps } from "./../../../types/CoinInputProps.props";

const CoinInput = ({ onCoinInsert }: CoinInputProps) => {
  const { coin, handleChange, handleInsert, coinOptions } =
    useCoinInsertion(onCoinInsert);

  return (
    <div className={styles.coinInput}>
      <select value={coin} onChange={handleChange}>
        {coinOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button onClick={handleInsert}>Insert</button>
    </div>
  );
};

export default CoinInput;
