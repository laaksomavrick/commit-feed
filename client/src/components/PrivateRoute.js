// PrivateRoute.js
// Router component to guard certain client side routes

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { is_logged_in } from '../utils/auth.js'

console.log(is_logged_in())

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
        is_logged_in() ? 
          (<Component {...props} />) 
          : (<Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
    }
  />
)

export default PrivateRoute
