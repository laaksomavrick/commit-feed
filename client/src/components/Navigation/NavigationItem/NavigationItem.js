// Navigation/NavigationItem/NavigationItem.js

import React from 'react'
import PropTypes from 'prop-types'
import './NavigationItem.css'

const NavigationItem = ({ name }) => (
  <div className="navigation-item-container">
    <div className="name">
      { name }
    </div>
  </div>
)

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default NavigationItem
