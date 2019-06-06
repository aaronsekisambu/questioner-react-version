import React, { Component } from "react";
import Img from "../images";

const Navigation = ({ logo, imageStyling, image, title, navStyling, titleStyling, imgStyling }) => {
  return (
    <div className={navStyling}>
      <div className="container">
        {/* Brand */}
        <div className={titleStyling}>
          {title}
          <Img className={imageStyling} src={image} alt="" />
        </div>
        <div className="navbar-brand ">
          <Img className={imgStyling} src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
