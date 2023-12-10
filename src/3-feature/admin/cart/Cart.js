import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  selectProducts,
  addToCart,
  removeFromCart,
} from "../cake-bookings/ShoppingSlice";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { selectUser } from "../../../Slices/authSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector(selectUser);
  const { name, email, mobile } = loggedUser;
  const cartProducts = useSelector(selectCart);
  const products = useSelector(selectProducts);
  const [productList, setproductList] = useState([]);

  useEffect(() => {
    const prodList = cartProducts.products.map((prod) => {
      const p = products.find(({ catId }) => catId == prod.catId);
      return { ...prod, ...p };
    });
    setproductList(prodList);
  }, [cartProducts]);

  const addProduct = (catId) => {
    console.log("adding");
    dispatch(addToCart({ catId: catId }));
  };

  const removeProduct = (catId) => {
    console.log("removing...");
    dispatch(removeFromCart({ catId: catId }));
  };
  let total = 0;
  const handleBooking = () => {
    navigate(`/secured/checkout`);
  };

  return (
    <>
      <h3>
        <Link to="/secured/cakebooking">view cakes</Link>
      </h3>
      <div className="d-md-flex">
        {productList.map((prod) => {
          total += prod.price * prod.quantity;
          return (
            <div
              key={prod.catId}
              style={{
                border: "2px solid #999",
                width: 270,
                height: 500,
                padding: 5,
                margin: 5,
                backgroundColor: "#fff",
              }}
            >
              <img src={prod.avatar} style={{ width: "100%", height: "50%" }} />
              <h4>{prod.title}</h4>
              <h4>{prod.flavours}</h4>
              <h4>quantity:{prod.quantity}</h4>
              <h4>price: {prod.price * prod.quantity}</h4>
              <div>
                <button onClick={() => removeProduct(prod.catId)}>--</button>
                <span>{prod.quantity}</span>
                <button onClick={() => addProduct(prod.catId)}>++</button>
              </div>

              <h4>Sub total: {prod.price * prod.quantity}</h4>
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: 40,
          border: "2px solid black",
          backgroundColor: "lightskyblue",
          color: "black",
        }}
      >
        Total:{Math.round(total)}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBooking}
        fullWidth
      >
        Proceed to pay
      </Button>
    </>
  );
};
export default Cart;
