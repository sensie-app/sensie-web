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
// helpers
import { storageService } from '../helpers/storage'
// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'
// doc types
import '../doc/types'

// amplify config
const amplifyConfig = Amplify.configure(awsmobile)
console.log('amplifyConfig', amplifyConfig)

// const
const { entrypoint, home, client, team, user } = DASHBOARD_ROUTES

const DashboardRoutes = () => {
  // hooks
  const dispatch = useDispatch()
  const tag1 = 'CognitoIdentityServiceProvider.' + amplifyConfig.aws_user_pools_web_client_id + '.LastAuthUser'
  const lastAuthUser = storageService.getValue(tag1)
  const tag2 = 'CognitoIdentityServiceProvider.' + amplifyConfig.aws_user_pools_web_client_id + '.' + lastAuthUser
  const accessToken = storageService.getValue(tag2 + '.accessToken')
  const userData = storageService.getJSONValue(tag2 + '.userData')

  useEffect(() => {
    dispatch(setLastAuthUserAction(lastAuthUser))
    dispatch(setUserAccessTokenAction(accessToken))
    dispatch(setUserDataAction(userData))
    dispatch(setUserIdAction(userData.Username))
  }, [])

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
