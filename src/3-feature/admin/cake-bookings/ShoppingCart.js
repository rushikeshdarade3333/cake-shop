import axios from "axios";

import { addProducts } from "./ShoppingSlice";

export const loadProducts = () => (dispatch, getState) => {
  axios
    .get("https://cakeshop-server.vercel.app/api/v1/cake")
    .then((response) => {
      dispatch(addProducts(response?.data.data));
    });
};
