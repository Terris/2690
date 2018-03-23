import React, { Component } from 'react';
// Square Styles
import '../stylesheets/square.css';

class Square extends Component {
  render() {
    return (
      <div className="square">{this.props.square}</div>
    )
  }
}

export default Square
