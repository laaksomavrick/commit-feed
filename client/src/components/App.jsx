import React from 'react'

export default class App extends React.Component {

  componentDidMount() {
    fetch('/api/heartbeat')
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1> Hello, world! </h1>
      </div>
    )
  }

}
