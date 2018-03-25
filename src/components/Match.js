import React, { Component } from 'react';
import '../stylesheets/match.css'

// Components
import Board from './Board.js'


class Match extends Component {
  render() {
    return (
      <div className="match">
        <div className="board_wrapper">
          <Board />
        </div>
      </div>
    );
  }
}

export default Match;
