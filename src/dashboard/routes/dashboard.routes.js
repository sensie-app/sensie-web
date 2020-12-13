// react
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// amplify
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import awsExports from '../../aws-exports'
// graphql
// import { listTopics } from '../../graphql/queries'
// import {} from '../../graphql/mutations'
// import {} from '../../graphql/subscriptions'
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
// styles
import '../styles/index.scss'

// amplify config
// const amp = Amplify.configure(awsExports)

// const
const { entrypoint, home, client, team } = DASHBOARD_ROUTES

const DashboardRoutes = () => {
  // // * start test amplify
  // const [api, setApi] = useState([])

  // useEffect(() => {
  //   testApi()
  //   console.log('api', api)
  // }, [])

  // const testApi = async () => {
  //   try {
  //     // todo: revisar esto!
  //     // const data = await API.graphql({
  //     //   query: {
  //     //     getUser(id: "U14") {
  //     //       email
  //     //       firstName
  //     //       gender
  //     //       goal
  //     //       groupId
  //     //     }
  //     //   }
  //     // })
  //     // console.log(2, data)
  //     const data = ''
  //     setApi(data)
  //   } catch (err) {
  //     console.log('err', err)
  //   }
  // }
  // // * end test amplify

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
