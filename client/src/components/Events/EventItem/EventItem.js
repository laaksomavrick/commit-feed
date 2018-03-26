// Events/EventItem/EventItem.js

import React from 'react'
import PropTypes from 'prop-types'
import EventItemContent from './EventItemContent/EventItemContent.js'
import { event_title } from '../../../utils/event.js'
import './EventItem.css'

class EventItem extends React.Component {

  render() {

    const event = this.props.event
    const commits = event.commits.map((commit, index) =>
      <EventItemContent key={index} commit={commit}/>
    )

    return (
      <div className="event-item-container">
        <div className="title">
          {event_title(event)}
        </div>
        <div className="commits">
          {commits}
        </div>
      </div>
    )

  }

}

EventItem.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventItem
