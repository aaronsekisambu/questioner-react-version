/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import Welcome from './welcome';
import logo from '../../images/logoQnier.png';
import Img from '../images';
import artwork from '../../images/developer-manager.png';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Navigation className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            {/* Brand */}
            <a
              className="navbar navbar-btn btn btn-sm btn-outline-info"
              href="#"
            >
              Questioner
            </a>
            <a className="navbar-brand ">
              <Img className="navbar-brand-img" src={logo} alt="" />
            </a>
          </div>
        </Navigation>
        <section className="pt-4 pt-md-11">
          <Welcome className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                <Img
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                  src={artwork}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate">
                {/* Heading */}
                <h1 className="display-5 text-center text-md-left">
                  Welcome to
                  <span className="text-primary"> Questioner</span>
                  {' '}
                  <br />
                  <span className="text-warning">Questioning anything</span>
                </h1>
                {/* Text */}
                <p className="lead text-center text-md-left text-black-50 mb-6 mb-lg-8">
                  Meet up, Ask Questions, Be Questioned, Get Answers and Give
                  Answers. Learn practically each Day
                </p>
                <div className="text-center text-md-left">
                  <Link to="/getStarted">
                    <button className="btn btn-warning shadow-sm p-3 lift mr-2">
                      Get Started
                      <i className="d-none d-md-inline ml-3 zmdi zmdi-arrow-right" />
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-outline-info p-3 lift">
                      Login
                      <i className="d-none d-md-inline ml-3 zmdi zmdi-rotate-cw " />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Welcome>
        </section>
      </Fragment>
    );
  }
}

export default LandingPage;
