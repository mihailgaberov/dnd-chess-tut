/**
 * Created by Mihail on 6/21/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

export default class BoardSquare extends Component {
  render() {
    const { x, y } = this.props
    const black = (x + y) % 2 === 1

    return (
      <Square black={black}>
        {this.props.children}
      </Square>
    )
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}