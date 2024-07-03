import { VendingMachineProvider } from "./context/VendingMachineContext";
import ProductList from "./components/ProductList/ProductList";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import styles from "./App.module.css";

const App = () => {
  return (
    <VendingMachineProvider>
      <div className={styles.container}>
        <ProductList />
        <ControlPanel />
      </div>
    </VendingMachineProvider>
  );
};

export default App;
