import { useContext } from "react";
import VendingMachineContext from "./../context/VendingMachineContext";

export const useVendingMachineState = () => {
  const context = useContext(VendingMachineContext);
  if (!context) {
    throw new Error();
  }
  return context.state;
};

export const useVendingMachineDispatch = () => {
  const context = useContext(VendingMachineContext);
  if (!context) {
    throw new Error();
  }
  return context.dispatch;
};
