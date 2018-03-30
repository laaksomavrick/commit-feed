// Events/EventList/EventList.js

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EventItem from '../EventItem/EventItem.js'
import './EventList.css'

class EventList extends React.Component {

  render() {
    const { events } = this.props
    const items = events.map((event, index) => 
      <EventItem key={index} event={event}/>
    )
    return (
      <div className="event-list-container">
        <div className="event-list-title">
          <h1>Recent activity:</h1>
        </div>
        <div className="event-list-detail">
          {items}
        </div>
      </div>
    )
  }

}

EventList.propTypes = {
  events: PropTypes.array.isRequired
}

const map_state_to_props = state => {
  return { events: state.events }
}

export default connect(map_state_to_props)(EventList)
