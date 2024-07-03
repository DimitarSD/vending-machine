import { ProductItem } from "./ProductItem.props";

export type Action =
  | { type: "SET_PRODUCTS"; payload: ProductItem[] }
  | { type: "INSERT_COINS"; payload: number }
  | { type: "RESET" }
  | { type: "BUY_PRODUCT"; payload: number };
