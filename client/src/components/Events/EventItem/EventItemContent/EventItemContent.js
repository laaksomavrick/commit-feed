// Events/EventItem/EventItemContent/EventItemContent.js

import React from 'react'
import PropTypes from 'prop-types'
import './EventItemContent.css'

const EventItemContent = ({ commit }) => (
  <div className="event-item-content-container">
    <div className="content">
      {commit.message}
    </div>
  </div>
)

EventItemContent.propTypes = {
  commit: PropTypes.object.isRequired
}

export default EventItemContent
