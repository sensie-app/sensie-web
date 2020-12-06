// react
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// constants-routes
import DASHBOARD_ROUTES from '../constants/routes'
// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
// components
import { NotFound404 } from '../components/Globals'
// containers
import Layout from '../containers/Layout'

const DashboardRoutes = () => {
  const { entrypoint, home, client, team } = DASHBOARD_ROUTES

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={home} component={Home} />
          <Route path={client} component={Client} />
          <Route path={team} component={Team} />
          <Redirect from={entrypoint} to={home} />
          <Route component={NotFound404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default DashboardRoutes
