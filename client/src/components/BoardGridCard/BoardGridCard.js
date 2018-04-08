// BoardGridCard / BoardGridCard.js

import React from 'react'
import PropTypes from 'prop-types'

import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import './BoardGridCard.css'

class BoardGridCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      raised: false
    }
  }

  onMouseEnter = () => {
    this.setState({ raised: true })
  }

  onMouseLeave = () => {
    this.setState({ raised: false })
  }

  render() {

    const { board } = this.props
    const { raised } = this.state

    return (
      <div className="board-grid-card-container">
        <Card 
          raised={raised}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
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

