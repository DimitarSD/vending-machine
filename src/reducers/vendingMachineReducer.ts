import { ProductItem } from "./../types/ProductItem.props";
import { Action } from "./../types/Action.props";

type State = {
  products: ProductItem[];
  insertedCoins: number;
};

export const initialState: State = {
  products: [],
  insertedCoins: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "INSERT_COINS":
      return { ...state, insertedCoins: state.insertedCoins + action.payload };
    case "RESET":
      return { ...state, insertedCoins: 0 };
    case "BUY_PRODUCT":
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { ...state, products: updatedProducts, insertedCoins: 0 };
    default:
      return state;
  }
};
