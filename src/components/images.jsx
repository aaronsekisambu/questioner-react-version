import React, { Component } from 'react';

class Images extends Component {
  render () {
    return (
        <img className={this.props.styleName}  src={this.props.src} alt={this.props.alt} />
    )
  }
}
export default Images;