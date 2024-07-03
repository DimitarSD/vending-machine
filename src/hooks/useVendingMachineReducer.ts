import { useReducer } from "react";
import { reducer, initialState } from "./../reducers/vendingMachineReducer";

export const useVendingMachineReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
