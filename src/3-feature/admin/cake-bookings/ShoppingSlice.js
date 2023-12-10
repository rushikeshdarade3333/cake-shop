import { createSlice } from "@reduxjs/toolkit";

const ShoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    cart: { catId: 0, products: [] },
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      return { ...state, products: action.payload };
    },

    addToCart: (state, { payload: prod }) => {
      const index = state?.cart?.products?.findIndex(
        (pro) => pro.catId == prod.catId
      );

      if (index >= 0) {
        //update logic from here to
        const p = state?.cart?.products[index];
        state.cart.products.splice(index, 1, {
          catId: p.catId,
          quantity: p.quantity + 1,
        }); //here
      } else {
        state?.cart?.products.push({ catId: prod.catId, quantity: 1 }); //if not available then add new
      }
    },

    removeFromCart: (state, { payload: prod }) => {
      const index = state?.cart?.products?.findIndex(
        (pro) => pro.catId == prod.catId
      );
      const p = state?.cart?.products[index];
      if (index >= 0 && p.quantity > 1) {
        state.cart.products.splice(index, 1, {
          catId: p.catId,
          quantity: p.quantity - 1,
        });
      } else if (p?.quantity == 1) {
        state.cart.products.splice(index, 1);
      }
    },
  },
});

export const { addProducts, addToCart, removeFromCart } = ShoppingSlice.actions;

export const selectCart = (state) => state.shopping.cart;
export const selectProducts = (state) => state.shopping.products;

export default ShoppingSlice.reducer;
