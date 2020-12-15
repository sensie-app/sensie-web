// react
import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../../aws-exports'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import '@aws-amplify/ui/dist/style.css'
// constants-routes
import DASHBOARD_ROUTES from '../constants/routes'
// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
// components
import { NotFound404 } from '../components/Globals'
// import Bootstrap from '../components/BootstrapTheme'
// containers
import Layout from '../containers/Layout'
// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'

// amplify config
const amplifyConfig = Amplify.configure(awsmobile)
console.log('amplifyConfig', amplifyConfig)

// const
const { entrypoint, home, client, team } = DASHBOARD_ROUTES

const listTopicsQuery = `
  query MyQuery {
    listTopics {
      items {
        id
      }
    }
  }
`

const DashboardRoutes = () => {
  // * start test amplify
  const [api, setApi] = useState([])

  useEffect(() => {
    testApi()
    console.log('api', api)
  }, [])

  const testApi = async () => {
    try {
      // todo: revisar esto!
      const data = await API.graphql(graphqlOperation(listTopicsQuery))
      console.log('dataApi', data)
      setApi(data)
    } catch (err) {
      console.log('err', err)
    }
  }
  // * end test amplify

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
