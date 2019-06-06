import React, { Component } from 'react';


class Welcome extends Component {
  render () {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome;