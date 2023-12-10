import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectCart, addToCart } from "./ShoppingSlice";
import "./cake.css";
import { selectUser } from "../../../../src/Slices/authSlice.js";

const Product = ({ flavours, title, price, catId, avatar }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);
  const { name, email, mobile } = loggedUser;
  const cart = useSelector(selectCart);
  let message = "add to cart";
  if (cart?.products?.some((pro) => pro.catId === catId))
    message = "added to cart";

  return (
    <div
      className="firstone col-sm-12 col-md-6 col-lg-4"
      style={{ border: "1px solid #999", backgroundColor: "#fff" }}
    >
      <img src={avatar} alt="" style={{ width: "100%", height: "400px" }} />

      <h4 style={{ marginTop: 20 }}>{flavours}</h4>
      <h4 style={{ fontWeight: "bold", marginTop: 20 }}>Rs - {price}</h4>
      <button onClick={() => dispatch(addToCart({ catId: catId }))}>
        {message}
      </button>
    </div>
  );
};

const ProductList = () => {
  const products = useSelector(selectProducts);
  const [filter, setFilter] = useState({});

  const FilterProducts = (title) => {
    if (title === "all") return setFilter([...products]);
    const arr = products.filter(
      (cake) => cake.title.toLowerCase() === title.toLowerCase()
    );
    setFilter(arr);
  };
  //flavoirs
  useEffect(() => {
    if (products) setFilter([...products]);
  }, []);
  const FilterFlavours = (flavours, title) => {
    if (flavours === "all") return setFilter([...products]);
    const arr = products.filter(
      (cake) => cake.flavours.toLowerCase() === flavours.toLowerCase()
    );
    setFilter(arr);
  };

  return (
    <>
      <div className="titlebtn d-md-flex">
        <button className="button-85 " onClick={() => FilterProducts("all")}>
          All category
        </button>
        <button
          className="button-85"
          onClick={() => FilterProducts("anniversary cake")}
        >
          anniversary Cake
        </button>

        <button
          className="button-85"
          onClick={() => FilterProducts("wedding cake")}
        >
          wedding cake
        </button>
        <button
          className="button-85"
          onClick={() => FilterProducts("birthday cake")}
        >
          Birthday Cake
        </button>

        <button
          className="button-85"
          onClick={() => FilterProducts("photo cake")}
        >
          photo cake
        </button>
      </div>

      <section className="d-md-flex" style={{ position: "absolute" }}>
        <div className="LeftBtn d-flex d-md-block">
          <button
            className="button-85"
            onClick={() => FilterFlavours("vanilla")}
          >
            vanilla
          </button>
          <br />
          <button
            className="button-85"
            onClick={() => FilterFlavours("chocolate")}
          >
            chocolate
          </button>
          <br />
          <button
            className="button-85"
            onClick={() => FilterFlavours("pineapple")}
          >
            pineapple
          </button>
          <br />
          <button
            className="button-85"
            onClick={() => FilterFlavours("biscuit")}
          >
            biscuit
          </button>
          <br />
          <button className="button-85" onClick={() => FilterFlavours("mango")}>
            mango
          </button>
          <br />
          <button
            className="button-85"
            onClick={() => FilterFlavours("blackcurrent")}
          >
            blackcurrent
          </button>
          <br />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Array.isArray(filter) &&
            filter.map((prod) => <Product key={prod.id} {...prod} />)}
        </div>
      </section>
    </>
  );
};

export default ProductList;
