import React from "react";
import pic from "../assets/airbnb 1.png";

const Navbar = () => {
  return (
    <nav>
      <img src={pic} alt="air ben logo" className="nav--logo" />
    </nav>
  );
};

export default Navbar;
