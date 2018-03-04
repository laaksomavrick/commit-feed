import React from 'react'

export default class App extends React.Component {

  componentDidMount() {
    this.test()
  }

  test = () => {
    fetch('/api/heartbeat', {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1> Hello, world! </h1>
        <button onClick={this.test}>Heartbeat</button>
        <a href="/api/auth/github"> Login with GitHub </a>
      </div>
    )
  }

}
