import { useEffect } from "react";
import axios from "axios";
import { Action } from "./../types/Action.props";

const useFetchProducts = (dispatch: React.Dispatch<Action>) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products")
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);
};

export default useFetchProducts;
