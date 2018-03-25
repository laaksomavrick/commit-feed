// Events/EventList/EventList.js

import React from 'react'
import { connect } from 'react-redux'
import EventItem from '../EventItem/EventItem.js'
import './EventList.css'

class EventList extends React.Component {

  render() {
    const { events } = this.props
    const items = events.map((event, index) => 
      <EventItem key={index} name={event.repo}/>
    )
    return (
      <div className="event-list-container">
        {items}
      </div>
    )
  }

}

const map_state_to_props = state => {
  return { events: state.events }
}

export default connect(map_state_to_props)(EventList)
