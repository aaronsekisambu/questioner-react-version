import React, { Component } from 'react';


class TextBox extends Component {
  render() { 
    return ( 
      <div className={this.props.className} > 
          {this.props.children}
        </div>
    );
  }
}
 
export default TextBox;