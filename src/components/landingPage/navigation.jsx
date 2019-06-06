import React, { Component } from 'react';

class Navigation extends Component {
  render () {
    return (
      <nav className={this.props.className}>
        {this.props.children}
      </nav>
    )
  }
}


export default Navigation;