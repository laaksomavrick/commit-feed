// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'

import BoardRoute from '../Route/BoardRoute.js'

import './BoardGridCard.scss'

const BoardGridCard = ({ board }) => (
  <BoardRoute board={board} className="board-grid-card">
    <ListItem button>
        <ListItemText 
          className="board-grid-card__text"
          primary={board.name}
        />
    </ListItem>
  </BoardRoute>
)

BoardGridCard.propTypes = {
  board: PropTypes.object.isRequired
}

export default BoardGridCard

