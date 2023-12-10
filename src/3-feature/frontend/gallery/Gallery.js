import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const CakeItem = ({ avatar, flavours }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          height: 500,
        }}
      >
        <div
          className="yash"
          style={{
            height: "600px",
          }}
        >
          <img src={avatar} style={{ width: "100%", height: "50" }} />

          <h3>mm: {flavours}</h3>
        </div>
      </div>
    </>
  );
};

const Gallery = () => {
  const [cakes, setCakes] = useState([]);

  const loadcakes = () => {
    axios
      .get("https://cakeshop-server.vercel.app/api/v1/cake")
      .then((response) => {
        console.log(response);
        setCakes(response.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    loadcakes();
  }, []);

  return (
    <>
      <h2 style={{ color: "#778899", fontWeight: "bold", fontSize: 34 }}>
        {" "}
        Cake Gallery
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // backgroundColor: "#DCDCDC",
        }}
      >
        {Array.isArray(cakes) &&
          cakes.map((cake) => <CakeItem key={cake._id} {...cake} />)}
      </div>
    </>
  );
};

export default Gallery;
