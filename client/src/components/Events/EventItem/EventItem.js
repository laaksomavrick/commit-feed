// Events/EventItem/EventItem.js

import React from 'react'
import PropTypes from 'prop-types'
import './EventItem.css'

const EventItem = ({ name }) => (
  <div className="event-item-container">
    <div className="name">
      { name }
    </div>
  </div>
)

EventItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default EventItem
