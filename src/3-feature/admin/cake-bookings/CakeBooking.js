import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import CartCounter from "./CartCounter";
import ProductList from "./ProductList";
import { loadProducts } from "./ShoppingCart";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          flexWrap: "wrap",
        }}
      >
        <CartCounter />
      </section>
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default ShoppingCart;
