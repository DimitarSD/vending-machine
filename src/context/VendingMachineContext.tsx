import { createContext, ReactNode, useReducer } from "react";
import { VendingMachineContextProps } from "./../types/VendingMachineContextProps.props";
import { reducer, initialState } from "./../reducers/vendingMachineReducer"; // Assuming you have this
import useFetchProducts from "./../hooks/useFetchProducts";

const VendingMachineContext = createContext<VendingMachineContextProps | undefined>(undefined);

type VendingMachineProviderProps = {
  children: ReactNode;
};

export const VendingMachineProvider = ({ children }: VendingMachineProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useFetchProducts(dispatch);

  return (
    <VendingMachineContext.Provider value={{ state, dispatch }}>
      {children}
    </VendingMachineContext.Provider>
  );
};

export default VendingMachineContext;