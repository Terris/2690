import React, { Component } from 'react';
// Components
import Board from './Board.js'

class Match extends Component {
  render() {
    return (
      <div className="match">
        <Board />
      </div>
    );
  }
}

export default Match;
