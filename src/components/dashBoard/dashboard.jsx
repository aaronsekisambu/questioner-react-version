import React, { Component, Fragment } from "react";
import SideNavigation from "./sideNav";
import Navigation from "../landingPage/navigation";
import logo from "../../images/logoQnier.png";
import avatar from "../../images/developers_5.png";
import Welcome from "../landingPage/welcome";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-12 p-0 m-0 shadow-sm">
          <Navigation
            navStyling="navbar navbar-expand-lg navbar-dark bg-secondary"
            image={logo}
            logo={avatar}
            imageStyling="navbar-brand-img"
            imgStyling="navbar-brand-img"
          />
        </div>
        <div className="container-fluid dashboard-container">
          <div className="row">
            <div className="col-12 col-lg-2 col-md-2 col-sm-2 p-0 m-0">
              <SideNavigation />
            </div>
          <div className="bg-primary ">
            Meetups
          </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
