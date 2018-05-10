// BoardGrid.js

import React from 'react'
import { connect } from 'react-redux'
import BoardGridCard from '../BoardGridCard/BoardGridCard.js'
import Typography from 'material-ui/Typography'
import List from 'material-ui/List'

import './BoardGrid.scss'

class BoardGrid extends React.Component {

  render() {

    const { boards } = this.props
    const items = boards.map((board, index) => 
      <BoardGridCard board={board} key={index} />
    )

    return (
      <div className="board-grid">
        <div className="board-grid__header">
          <Typography variant="headline" component="h2">Boards</Typography>
        </div>
        <div className="board-grid__items">
          {items}
        </div>
      </div>
    )

  }

}

const map_state_to_props = state => {
  return { boards: state.boards.filtered }
}

export default connect(map_state_to_props)(BoardGrid)
