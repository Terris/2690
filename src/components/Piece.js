import _ from 'lodash';
import React, { Component } from 'react';
import { highlightAvailableMoves, hideAvailableMoves } from '../actions';
import { calculateMoves } from '../utils';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  constructor(props) {
    super(props)
    this.state = {
      availableMoves: []
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    var availableMoves = calculateMoves(this.props.piece.type, this.props.square.id);
    // Remove squares with pieces
    _.forIn(this.props.board, (value, key) => {
      if(value.piece) {
        _.pull(availableMoves, parseInt(key, 10) );
      }
    });

    this.setState({
      availableMoves: availableMoves
    })
  }

  handleMouseOver() {
    this.props.highlightAvailableMoves( this.state.availableMoves );
  }

  handleMouseOut() {
    this.props.hideAvailableMoves();
  }

  render() {
    return(
      <div className="piece" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <img src={`/images/${this.props.piece.img}`} alt={this.props.piece.name} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

export default connect(mapStateToProps, { highlightAvailableMoves, hideAvailableMoves })(Piece);
