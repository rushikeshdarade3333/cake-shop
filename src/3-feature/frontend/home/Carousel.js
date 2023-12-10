import React from "react";
import "./carosal.css";

const Carosal = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://wallpapercave.com/wp/wp5880395.jpg"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapercave.com/wp/wp5880399.jpg"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://wallpapercave.com/wp/wp5880195.jpg"
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* {/ last text /} */}

      <div className="text d-md-flex container">
        <div>
          <h1 style={{ color: "#fff", fontWeight: "900", fontSize: "38px" }}>
            About Cake Shop!
          </h1>
          <span style={{ fontSize: "23px", color: "#fff" }}>
            Welcome to Tasty Cake Shop Bakery.
            <br /> Tasty Cake Shop Bakery is a family owned and operated
            business
            <br /> in Mumbai. We carefully select our ingredients for their
            <br /> freshness, flavor and natural value. We choose organic,
            locally
            <br /> grown products when available. Everything we make embodies
            <br /> our commitment to consistency and excellence. The heart of
            the
            <br /> bakery is a small, dedicated group of hard working bakers. We
            <br /> are grateful to our amazing staff, loyal customers, and the
            most <br />
            supportive local community who allow us to do the work we love
            <br />
            every day.
            <br />
            Richards and Tim Hurley
          </span>
        </div>
        <div className="about">
          <h2>Location</h2>
          <h4>Sony Apartment, Shop No 4, Hill Road</h4>
          <h4>Bandra West</h4>
          <h4>Mumbai,Maharashtra 400050</h4>

          <h2>Hours</h2>
          <h4>Monday-Wednesday 8:30 -4:00</h4>
          <h4>Thursday & Friday 8:30 -5:00</h4>
          <h4>Saturday & Sunday CLOSED</h4>
        </div>
      </div>
    </>
  );
};

export default Carosal;
