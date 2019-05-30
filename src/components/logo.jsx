import React from 'react';
import logo from '../images/logo.png';

class Logo extends React.Component {
  render () {
    return (
      <div className="logo">
       <img src={logo} alt="" />
      </div>
    )
  }
}

export default Logo;