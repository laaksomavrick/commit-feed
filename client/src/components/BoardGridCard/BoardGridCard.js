// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import BoardRoute from '../Route/BoardRoute.js'

import './BoardGridCard.css'

const BoardGridCard = ({ board }) => (
  <BoardRoute board={board} className="board-grid-card">
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          {board.name}
        </Typography>
      </CardContent>
    </Card>
  </BoardRoute>
)

BoardGridCard.propTypes = {
  board: PropTypes.object.isRequired
}

export default BoardGridCard

