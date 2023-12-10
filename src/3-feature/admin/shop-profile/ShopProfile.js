import React from "react";
import IconButton from "@mui/material/IconButton";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";

import "./shop.css";

const ShopProfile = () => {
  return (
    <>
      <div class="card">
        <div class="image">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div class="details">
          <div class="center">
            <h1>
              Tasty Cake Shop...
              <br />
            </h1>
            <p>
              The best thing about eating a cake is that calories are the last
              thing that you have to worry about❤️🙂
            </p>

            <IconButton>
              <Email style={{ color: "blue" }} />

              <h6>tastycake0101@gmail.com</h6>
            </IconButton>
            <h6>Sony Apartment, Shop No 4, Hill Road</h6>
            <h6>Bandra West, Mumbai,Maharashtra 400050</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
