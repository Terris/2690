import React, { Component } from 'react';
import '../stylesheets/piece.css';

class Piece extends Component {
  render() {
    return(
      <div className="piece">
        <button>{this.props.piece}</button>
      </div>
    )
  }
}

export default Piece;
