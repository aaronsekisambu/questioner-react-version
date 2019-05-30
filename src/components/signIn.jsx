import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ENV from "dotenv";
import signInAction from "../store/actions/signIn";
import Header from "./header";
import "../css/signup.scss";

ENV.config();
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      signInAction({
        email: this.state.email,
        password: this.state.password
      })
    );
  };

  componentWillReceiveProps = (nextProps, prevPops) => {
    console.log("here", this.state, nextProps);
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="body">
          <div id="container">
            <div className="logos">
              <Link to="/">Back</Link>
            </div>
            <div className="login-item">
              <form
                action=""
                method="post"
                onSubmit={this.handleSubmit}
                className="form form-login"
              >
                <div className="form-field">
                  <label className="lock" for="login-password">
                    <span className="hidden">email</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="email"
                    type="text"
                    className="form-input"
                    placeholder="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="lock" for="login-password">
                    <span className="hidden">Password</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="password"
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="form-field">
                  <input type="submit" value="Sign in" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SignIn);
