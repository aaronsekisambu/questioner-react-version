import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from './header';
import { connect } from 'react-redux';
import "../css/signup.scss";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    isadmin: "",
    password: "",
    phonenumber: "",
    othername: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      isadmin: this.state.isadmin,
      password: this.state.password,
      phonenumber: this.state.phonenumber,
      othername: this.state.othername
    })
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
                  <label className="user" for="login-username">
                    <span className="hidden">firstname</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="firstname"
                    type="text"
                    className="form-input"
                    placeholder="firstname"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="lock" for="login-password">
                    <span className="hidden">lastname</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="lastname"
                    type="text"
                    className="form-input"
                    placeholder="lastname"
                    required
                  />
                </div>
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
                    <span className="hidden">username</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="username"
                    type="text"
                    className="form-input"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="lock" for="login-password">
                    <span className="hidden">isadmin</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="isadmin"
                    type="text"
                    className="form-input"
                    placeholder="isadmin"
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
                  <label className="lock" for="login-password">
                    <span className="hidden">phone number</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="phonenumber"
                    type="text"
                    className="form-input"
                    placeholder="phone number"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="lock" for="login-password">
                    <span className="hidden">othername</span>
                  </label>
                  <input
                    onChange={this.handleChange}
                    id="othername"
                    type="text"
                    className="form-input"
                    placeholder="othername"
                    required
                  />
                </div>

                <div className="form-field">
                  <input type="submit" value="Sign up" />
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
  }
}

export default connect(mapStateToProps)(SignUp);
