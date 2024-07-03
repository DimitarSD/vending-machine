import { useVendingMachineDispatch } from './../../../hooks/useVendingMachineContext';
import styles from './ResetButton.module.css';

const ResetButton = () => {
  const dispatch = useVendingMachineDispatch();

  return (
    <div className={styles.resetButton}>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};

export default ResetButton;