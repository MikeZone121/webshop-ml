import { ActionTypes } from "../constants/action-types";
import { ProductModel } from "../../components/types";

const initialProductState: ProductModel[] = [];

const initialSelectedProductState: ProductModel = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  images: "",
  thumbnail: "",
  category: "",
  brand: "",
};

export const productReducer = (
  state = initialProductState,
  action: {
    type: ActionTypes.SET_PRODUCTS;
    payload: { products: ProductModel[] };
  }
): ProductModel[] => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return action.payload.products;
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialSelectedProductState,
  action: { type: ActionTypes.SELECTED_PRODUCTS; payload: ProductModel }
): ProductModel => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
