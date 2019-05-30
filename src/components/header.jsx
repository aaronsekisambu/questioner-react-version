import React, { Component } from "react";
import Image from "../components/images";
import logoImg from "../images/logo.png";
import TextBox from "../components/textBox";
import Btn from "./button01";

class Header extends Component {
  render() {
    return (
      <TextBox className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./aaron">
          <Image styleName="logo" src={logoImg} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link logoName" href="./aaron">
                home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <Btn className="btn btn-outline-success my-2 my-sm-0 top-signIn" type="submit">
            questioner
          </Btn>
        </div>
      </TextBox>
    );
  }
}

export default Header;
