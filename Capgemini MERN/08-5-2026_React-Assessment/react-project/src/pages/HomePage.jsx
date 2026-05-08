// HomePage.jsx
import React from "react";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-container">

      <div className="left-section">
        <div className="circle">
          <img
            src="https://unsplash.com/photos/a-young-woman-stands-on-a-path-by-the-ocean-eTfl6Ab0u4E"
            alt="shopping"
          />
        </div>
      </div>

      <div className="right-section">
        <h3>SPECIAL OFFER</h3>

        <h1>
          MEGA <br />
          <span>SALE</span>
        </h1>

        <p>
          Welcome to Ecommerce Site
        </p>

        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default HomePage;