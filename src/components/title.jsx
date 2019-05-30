import React from 'react';

class Title extends React.Component {
  render () {
    return (
      <h2 className="title main">{this.props.title}</h2>
    )
  }
}

export default Title;