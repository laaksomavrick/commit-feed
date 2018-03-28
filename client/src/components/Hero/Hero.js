// components/Hero/Hero.js

import React from 'react'
import './Hero.css'

class Hero extends React.Component {

  render() {

    return (
      <div className="hero-container">
        <div className="hero-title">
          <h1>Something catchy,</h1>
          <h1>blah blah blah blah.</h1>
        </div>
        <div className="hero-detail">
          <p> A little blurb about me, something flattering and truthful. JavaScript redux rockstar ninja.</p>
        </div>
      </div>
    )

  }

}

export default Hero
