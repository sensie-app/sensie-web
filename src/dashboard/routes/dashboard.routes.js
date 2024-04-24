// react
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { ThemeProvider } from '@material-ui/core/styles'
// redux
import { useSelector } from 'react-redux'
// import { getAllTopicsAction } from '../../redux/actions/topics.action'
// constants-routes
import DASHBOARD_ROUTES from '../constants/routes'
// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
import User from '../pages/User'
import Affirmations from '../pages/Affirmations'
import Pack from '../pages/Pack'
import Topic from '../pages/Topic'
import SageDashboard from '../pages/SageDashboard'
import Profile from '../pages/Profile'
// components
import { NotFound404 } from '../components/Globals'
// containers
import AuthStateApp from '../containers/AuthStateApp'
import Layout from '../containers/Layout'
// amplify
// import '@aws-amplify/ui/dist/style.css'
import '@aws-amplify/ui-react/styles.css'

// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'
// doc types
import '../doc/types'
// import { listUsersByOrganizationIdAction } from '../../redux/actions/users.actions'
// import { listAffirmationsByCoachId } from '../../redux/actions/affirmations.actions'
// theme
// import theme from '../styles/theme'

// const
const {
  entrypoint,
  home,
  dashboard,
  client,
  team,
  // user,
  intentions,
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
  // ? hooks
  // const dispatch = useDispatch()
  const {
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)

  // useEffect(() => {
  //   dispatch(getAllTopicsAction())
  // }, [])

  useEffect(async () => {
    // dispatch(listUsersByOrganizationIdAction(user.id, globalDateFilter.value))
    // dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
  }, [globalDateFilter])

  return (
    <AuthStateApp>
      {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route path={home} component={Home} />
              <Route path={dashboard} component={Home} />
              <Route exact path={entrypoint} component={Home} />
              <Route path={client} component={Client} />
              <Route path={team} component={Team} />
              <Route path={intentions} component={Affirmations} />
              <Route path={sageDashboard} component={SageDashboard} />
              <Route path={profile} component={Profile} />
              <Route path={'/dashboard/user' + '/:id'} component={User} />
              <Route path={pack + '/:id'} component={Pack} />
              <Route path={topic + '/:id'} component={Topic} />
              {/* <Redirect from={entrypoint} to={home} /> */}
            </Layout>
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </AuthStateApp>
  )
}

export default DashboardRoutes
