// react
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// redux
import { useDispatch } from 'react-redux'
import { setTopicsAction } from '../../redux/actions/topics.action'
// constants-routes
import DASHBOARD_ROUTES from '../constants/routes'
// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
import User from '../pages/User'
import Affirmations from '../pages/Affirmations'
import AddPacks from '../pages/AddPacks'
import Pack from '../pages/Pack'
import Topic from '../pages/Topic'
import SageDashboard from '../pages/SageDashboard'
import Profile from '../pages/Profile'
// components
import { NotFound404 } from '../components/Globals'
// containers
import AuthStateApp from '../containers/AuthStateApp'
import Layout from '../containers/Layout'
// hooks
import useGraphQlApi from '../hooks/useGraphQlApi'
// graphql queries
import { listTopicsQuery } from '../graphql/queries'
// amplify
import '@aws-amplify/ui/dist/style.css'
// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'
// doc types
import '../doc/types'

// const
const {
  entrypoint,
  home,
  client,
  team,
  user,
  affirmations,
  addPacks,
  pack,
  topic,
  sageDashboard,
  profile
} = DASHBOARD_ROUTES

// * component
/**
 * DashboardRoutes component
 * @component
 */
const DashboardRoutes = () => {
  // hooks
  const dbTopics = useGraphQlApi(listTopicsQuery())
  const dispatch = useDispatch()

  useEffect(() => {
    const { loading, value } = dbTopics
    value !== null && !loading && dispatch(setTopicsAction(value.listTopics.items))
  }, [dbTopics])

  return (
    <AuthStateApp>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path={home} component={Home} />
            <Route path={client} component={Client} />
            <Route path={user} component={User} />
            <Route path={team} component={Team} />
            <Route path={affirmations} component={Affirmations} />
            <Route path={addPacks} component={AddPacks} />
            <Route path={sageDashboard} component={SageDashboard} />
            <Route path={profile} component={Profile} />
            <Route path={pack + '/:id'} component={Pack} />
            <Route path={topic + '/:id'} component={Topic} />
            <Redirect from={entrypoint} to={home} />
          </Layout>
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    </AuthStateApp>
  )
}

export default DashboardRoutes
