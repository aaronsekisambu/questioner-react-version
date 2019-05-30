import React, { Component } from "react";
import {Link} from 'react-router-dom';
import TextBox from "./textBox";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row holder">
          <TextBox className="col-sm">
            <div
              className="card text-white bg-info mb-3 hovers"
              styles="max-width: 18rem;"
            >
              <Link to='/sign-up'><div className="card-header get">Get Started</div></Link>
              <div className="card-body">
              <Link to='/sign-up'><h4 className="card-title title">Ask, Meetup, Get Answers</h4></Link>
              </div>
            </div>
          </TextBox>
          <TextBox className="col-sm">
            <div
              className="card text-white bg-success mb-3 hovers"
              styles="max-width: 18rem;"
            >
              <Link to='/sign-in'><div className="card-header get">sign in</div></Link>
              <div className="card-body">
              <Link to='/sign-in'><h4 className="card-title title">Welcome back</h4> </Link>
              </div>
            </div>
          </TextBox>
        </div>
      </div>
    );
  }
}

export default Container;
