// Navgation/NavigationBar/NavigationBar.js

import React from 'react'
import { connect } from 'react-redux'
import NavigationItem from '../NavigationItem/NavigationItem.js'
import './NavigationBar.css'

class NavigationBar extends React.Component {

  //TODO Dashboard
  // List of projects

  render() {
    const { projects } = this.props
    const items = projects.map((project, index) => 
      <NavigationItem key={index} name={project.name}/>
    )
    return (
      <div className="navigation-bar-container">
        {items}
      </div>
    )
  }

}

const map_state_to_props = state => {
  return { projects: state.projects }
}

export default connect(map_state_to_props)(NavigationBar)
