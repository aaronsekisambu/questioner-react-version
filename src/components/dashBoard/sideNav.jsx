import React from "react";
import logo from "../../images/logoQnier.png";

const SideNavigation = () => {
  return (
    <div className="d-inline-block vh-100 bg-light shadow-sm h-100 position-fixed side-navigation border border-right-outline">
      {/* <div className="navbar-brand ml-3">
        <img className="questioner-logo" src={logo} alt="" />
      </div> */}
      <div className="mt-4 mb-3 create-meet-up ">
          <i class="pr-1 zmdi zmdi-plus-circle-o" />New Meet up
      </div>
      <div className="mt-4 mb-3 create-meet-up ">
          <i class="pr-1 zmdi zmdi-plus-circle-o" />Draft
      </div>
    </div>
  );
};

export default SideNavigation;
