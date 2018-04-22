// Route/BoardRoute.js

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class BoardRoute extends React.Component {

  constructor(props) {
    super(props)
  }

  handle_click = e => {
    const { history, board, afterClick } = this.props
    history.push(`/board/${board.id}`)
    if (afterClick) {
      afterClick()
    }
  }

  render() {

    const { className } = this.props

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
