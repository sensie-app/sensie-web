// react
import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// amplify
import Amplify from 'aws-amplify'
import awsmobile from '../../aws-exports'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import '@aws-amplify/ui/dist/style.css'
// redux
import { useDispatch } from 'react-redux'
import { setLastAuthUserAction, setUserAccessTokenAction, setUserDataAction, setUserIdAction } from '../../redux/actions/user.actions'
import { setTopicsAction } from '../../redux/actions/topics.action'
// constants-routes
import DASHBOARD_ROUTES from '../constants/routes'
// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
import User from '../pages/User'
// components
import { NotFound404 } from '../components/Globals'
// containers
import Layout from '../containers/Layout'
// hooks
import useGraphQlApi from '../hooks/useGraphQlApi'
import useLocalStorage from '../hooks/useLocalStorage'
// graphql queries
import { listTopicsQuery } from '../graphql/queries'
// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'
// doc types
import '../doc/types'

// * amplify config
const amplifyConfig = Amplify.configure(awsmobile)

// const
const { entrypoint, home, client, team, user } = DASHBOARD_ROUTES

// * component
/**
 * DashboardRoutes component
 * @component
 */
const DashboardRoutes = () => {
  // const
  const tag = 'CognitoIdentityServiceProvider.' + amplifyConfig.aws_user_pools_web_client_id
  // hooks
  const dbTopics = useGraphQlApi(listTopicsQuery())
  const dispatch = useDispatch()
  const [lastAuthUser] = useLocalStorage(tag + '.LastAuthUser', null, '')
  const [accessToken] = useLocalStorage(tag + '.' + lastAuthUser + '.accessToken', null, '')
  const [userData] = useLocalStorage(tag + '.' + lastAuthUser + '.userData', null)

  useEffect(() => {
    dispatch(setLastAuthUserAction(lastAuthUser))
    dispatch(setUserAccessTokenAction(accessToken))
    dispatch(setUserDataAction(userData))
    dispatch(setUserIdAction(userData.Username))
  }, [])

  useEffect(() => {
    const { loading, value } = dbTopics
    value !== null && !loading && dispatch(setTopicsAction(value.listTopics.items))
  }, [dbTopics])

  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        hideSignUp={true}
        slot="sign-in"
      />
      <div>
        <BrowserRouter>
          <Switch>
            <Layout>
              <Fragment>
                <Route path={home} component={Home} />
                <Route path={client} component={Client} />
                <Route path={user} component={User} />
                <Route path={team} component={Team} />
                <Redirect from={entrypoint} to={home} />
              </Fragment>
            </Layout>
            <Route component={NotFound404} />
          </Switch>
        </BrowserRouter>
      </div>
    </AmplifyAuthenticator>
  )
}

export default DashboardRoutes
