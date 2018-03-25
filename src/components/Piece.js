import _ from 'lodash';
import React, { Component } from 'react';
import { calculateMoves } from '../helpers';
import { connect } from 'react-redux';
import '../stylesheets/piece.css';

class Piece extends Component {

  constructor(props) {
    super(props)
    this.state = {
      possibleMoves: []
    }
  }

  componentDidMount() {
    var possibleMoves = calculateMoves(this.props.piece.type, this.props.square.id);
    // Remove squares with spaces.
    _.forIn(this.props.board, (value, key) => {
      if(value.piece) {
        _.pull(possibleMoves, parseInt(key) );
      }
    });

    this.setState({
      possibleMoves: possibleMoves
    })
  }

  handleMouseOver = () => {}

  handleDrag(e) {
    console.log(e);
  }

  render() {
    return(
      <div className="piece" onMouseOver={this.handleMouseOver}>
        <img src={`/images/${this.props.piece.img}`} alt={this.props.piece.name}
          onDragEnter={this.handleDrag()}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

export default connect(mapStateToProps)(Piece);
