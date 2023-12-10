import { Button, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Carosal from "./Carousel";
const Home = () => {
  return (
    <>
      <h2
        style={{
          fontStyle: "oblique 10deg",
          fontFamily: "cursive",
          textAlign: "left",
          fontWeight: "900",
          fontSize: "38px",
          marginBottom: 40,
          color: "#fff",
        }}
      >
        Welcome To Tasty Cake Shop
      </h2>
      <div>
        <Carosal /> <br />
      </div>
      <br />
      <div>
        <Button
          sx={{
            backgroundColor: "gray",
            borderRadius: 3,
            marginTop: -20,
            width: 180,
            marginTop: "10px",
          }}
        >
          <Link
            to={"./Gallery"}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            view gallery
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
