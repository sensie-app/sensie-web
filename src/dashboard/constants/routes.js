import APP_ROUTES from '../../constants/routes'

const { dashboard } = APP_ROUTES

const DASHBOARD_ROUTES = {
  entrypoint: dashboard + '/',
  home: dashboard + '/home',
  client: dashboard + '/client',
  team: dashboard + '/team',
  user: dashboard + '/user'
}

export default DASHBOARD_ROUTES
