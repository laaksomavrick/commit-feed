// Route/BoardRoute.js

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class BoardRoute extends React.Component {

  constructor(props) {
    super(props)
  }

  handle_click = e => {
    const { history, board } = this.props
    history.push(`/board/${board.id}`)
  }

  render() {

    const { className } = this.props

    console.log(this.props.children)

    return (
      <div className={className} onClick={this.handle_click}>
        {this.props.children}
      </div>
    )

  }

}

BoardRoute.propTypes = {
  board: PropTypes.object.isRequired
}

export default withRouter(BoardRoute)
