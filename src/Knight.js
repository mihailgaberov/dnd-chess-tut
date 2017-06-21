/**
 * Created by Mihail on 6/21/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ItemTypes } from './Constants'
import { DragSource } from 'react-dnd'

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const knightSource = {
  beginDrag(props) {
    return {}
  }
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    )
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
