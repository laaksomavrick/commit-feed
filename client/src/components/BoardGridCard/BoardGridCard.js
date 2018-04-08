// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'

import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const BoardGridCard = ({ board }) => (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          {board.name}
        </Typography>
      </CardContent>
    </Card>
)

BoardGridCard.propTypes = {
  board: PropTypes.object.isRequired
}

export default BoardGridCard

