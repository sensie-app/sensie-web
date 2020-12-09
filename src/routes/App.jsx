// react
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from '../aws-exports'
// containers
import DashboardRoutes from '../dashboard/routes/dashboard.routes'
import LandingRoutes from '../landing/routes/landing.routes'
// components
import { NotFound404 } from '../components'
// utils
import APP_ROUTES from '../constants/routes'

Amplify.configure(awsExports)

console.log('test', API, graphqlOperation)

const App = () => {
  const { dashboard, landing } = APP_ROUTES
  return (
    <BrowserRouter>
      <Switch>
        <Route path={dashboard} component={DashboardRoutes} />
        <Route path={landing} component={LandingRoutes} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
