// Route/BackRoute.js

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class BackRoute extends React.Component {

  constructor(props) {
    super(props)
  }

  handle_click = e => {
    //TODO: provide base route url for back versus just popping!!
    const { history, afterClick } = this.props
    history.goBack()
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

export default withRouter(BackRoute)
