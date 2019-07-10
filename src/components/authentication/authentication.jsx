import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import '../../styles/getStarted.scss';
import PropTypes from 'prop-types';
import Img from '../images';
import artwork from '../../images/developer-team.png';
import { userLogin } from '../../redux/action-creators';

class Authentication extends Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      token: '',
      user: {},
    };
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (user !== undefined) {
      const { message } = user;
      const nowAccessedOrNot = user !== undefined ? message : 'Check your credentials';
      return this.notify(nowAccessedOrNot);
    }
    return null;
  }

  responseGoogle = ({ response, provider }) => {
    const { userLogin } = this.props;
    const { accessToken } = response;
    userLogin(accessToken, provider);
  };

  onFailure = (error) => {
    console.log(error);
  };

  notify = success => toast.success(success);

  render() {
    const content = this.state.isAuthenticated ? (
      'Logged out'
    ) : (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={response => this.responseGoogle({ response, provider: 'google-plus' })}
        onFailure={this.onFailure}
        cookiePolicy="single_host_origin"
      >
        Sign in with Google
        <i className="d-none d-md-inline ml-2 mr-2 zmdi zmdi-chevron-right" />
      </GoogleLogin>
    );
    return (
      <section className="bg-gradient height-70 o-hidden">
        <div className="container center-me">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="card shadow-lg">
                <div className="card-body p-4 p-md-5">
                  <h2 className="display">
                    Welcome to back
                    <span className="text-warning"> Questioner</span>
                    {' '}
                    <br />
                    <span className="subtitle-size lead font-weight-bold text-info pb-3 mb-5 border-bottom border-light ">
                      Let's meet some
                      {' '}
                      <span className="text-warning text-capitalize font-weight-lighter">
                        {' '}
                        questions
                        {' '}
                      </span>
                      {' '}
                      that need answers
                    </span>
                  </h2>
                  <div className="col-12 mt-5 mb-5 middle-image">
                    <Img
                      className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate mt-5 pb-3 border-bottom border-light"
                      src={artwork}
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </div>
                  <div className="border-bottom border-light">
                    {content}
                    <Link to="/">
                      <p className="lead small float-right pr-4 pt-3 text-center">
                        <i className="d-none d-md-inline mt-4 mr-1 zmdi zmdi-long-arrow-return" />
                        back
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Authentication.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.userAccess.user,
});

export default connect(
  mapStateToProps,
  { userLogin },
)(Authentication);
