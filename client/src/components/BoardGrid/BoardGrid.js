// BoardGrid.js

import React from 'react'
import { connect } from 'react-redux'
import BoardGridCard from '../BoardGridCard/BoardGridCard.js'

import './BoardGrid.css'

class BoardGrid extends React.Component {

  render() {

    const { boards } = this.props
    const items = boards.map((board, index) => 
      <BoardGridCard board={board} key={index} />
    )

    return (
      <div className="board-grid-container">
        {items}
      </div>
    )

  }

}

const map_state_to_props = state => {
  return { boards: state.boards }
}

export default connect(map_state_to_props)(BoardGrid)
