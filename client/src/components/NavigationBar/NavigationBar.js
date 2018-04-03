// Navgation/NavigationBar/NavigationBar.js

import React from 'react'
import { connect } from 'react-redux'
import './NavigationBar.css'

class NavigationBar extends React.Component {

  //TODO Dashboard
  // List of projects

  render() {
    //const { repos } = this.props
    //const items = repos.map((repo, index) => 
    //  <NavigationItem key={index} name={repo.name}/>
    //)
    return (
      <div className="navigation-bar">
      </div>
    )
  }

}

const map_state_to_props = state => {
  return { repos: state.repos }
}

export default connect(map_state_to_props)(NavigationBar)
