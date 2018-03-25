// Events/EventItem/EventItem.js

import React from 'react'
import PropTypes from 'prop-types'
import { event_title } from '../../../utils/event'
import './EventItem.css'

const EventItem = ({ event }) => (
  <div className="event-item-container">
    <div className="title">
      { event_title(event) }
    </div>
  </div>
)

EventItem.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventItem
