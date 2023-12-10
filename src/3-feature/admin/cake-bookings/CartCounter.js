import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "./ShoppingSlice";
import IconButton from "@mui/material/IconButton";
import Cart from "@mui/icons-material/ShoppingBag";
import "./cake.css";

const CartCounter = () => {
  const length = useSelector(selectCart)?.products?.length;
  return (
    <Link to="/secured/cart" style={{ textDecoration: "none" }}>
      <div>
        <IconButton sx={{ fontSize: 50 }}>
          <Cart
            className="carts"
            sx={{ position: "absolute", color: "black" }}
          />
        </IconButton>
        <div className="cartdiv">
          <h4 classname="length">{length}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CartCounter;
