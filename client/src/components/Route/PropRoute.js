// Route/PropRoute.js

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

const PropRoute = ({ component, ...rest }) => (
  <Route
    {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }}
  />
)

export default PropRoute
