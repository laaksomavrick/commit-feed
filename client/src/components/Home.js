import React from 'react'

export default class Home extends React.Component {

  heartbeat = () => {
    fetch('/api/heartbeat', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <button onClick={this.heartbeat}>Heartbeat</button>
    )
  }

}
