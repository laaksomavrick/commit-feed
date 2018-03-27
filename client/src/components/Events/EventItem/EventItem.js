// Events/EventItem/EventItem.js

import React from 'react'
import PropTypes from 'prop-types'
import EventItemContent from './EventItemContent/EventItemContent.js'
import { event_title } from '../../../utils/event.js'
import './EventItem.css'

class EventItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show_commit: false
    }
  }

  toggle = () => {
    this.setState({show_commit: !this.state.show_commit})
  }

  render() {

    const event = this.props.event
    const commits = event.commits.map((commit, index) =>
      <EventItemContent key={index} commit={commit}/>
    )
    const hidden = this.state.show_commit ? '' : 'hidden'

    return (
      <div className="event-item-container" onClick={this.toggle}>
        <div className="title">
          {event_title(event)}
        </div>
        <div className={`commits ${hidden}`}>
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
