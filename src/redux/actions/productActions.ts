import { ActionTypes } from "../constants/action-types";
import { ProductModel } from "../../components/types";

export const setProducts = (products: ProductModel[]) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProducts = (products: ProductModel[]) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProducts = (products: ProductModel[]) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: products,
  };
};
