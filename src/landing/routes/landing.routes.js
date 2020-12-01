// react
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// utils
import LANDING_ROUTES from '../constants/routes'
// containers
import App from '../containers/App'
// components
import { NotFound404 } from '../components/Globals'

const LandingRoutes = () => {
  const { home } = LANDING_ROUTES

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={home} component={App} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
}

export default LandingRoutes
