// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'

import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import './BoardGridCard.css'

class BoardGridCard extends React.Component {


  render() {

    //add an onclick prop

    const { board } = this.props

    return (
      <div className="board-grid-card">
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              {board.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

BoardGridCard.propTypes = {
  board: PropTypes.object.isRequired
}

export default BoardGridCard

