// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import './BoardGridCard.css'

class BoardGridCard extends React.Component {

  handle_click = e => {
    const { history, board } = this.props
    history.push(`/board/${board.id}`)
  }

  render() {

    const { board } = this.props

    return (
      <div className="board-grid-card" onClick={this.handle_click}>
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

export default withRouter(BoardGridCard)

