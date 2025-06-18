// react
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, useLocation, Redirect } from 'react-router-dom'

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

  useEffect(() => {
    // const fetchData = async () => {
    //   // dispatch(listUsersByOrganizationIdAction(user.id, globalDateFilter.value))
    //   // dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
    // }
    // fetchData()
  }, [globalDateFilter])

  const [initialAuthState, setInitialAuthState] = useState(false)

  const location = useLocation()
  const urlParts = location.pathname.split('/')
  const lastFragment = urlParts[urlParts.length - 1]

  useEffect(() => {
    // Verificar si el parámetro 'authType' indica un login
    if (lastFragment === 'login' || lastFragment === 'signup') {
      setInitialAuthState(true) // Cambiar el initialState a signIn si es un login
    }
  }, [])

  return (
    <AuthStateApp>
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route path={home} component={Home} />
              {initialAuthState && <Redirect to={'/dashboard'}/>}
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
    </AuthStateApp>
  )
}

export default DashboardRoutes
