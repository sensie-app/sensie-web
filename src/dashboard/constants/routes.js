import APP_ROUTES from '../../constants/routes'

const { dashboard } = APP_ROUTES

const DASHBOARD_ROUTES = {
  entrypoint: dashboard + '/',
  home: dashboard + '/home',
  dashboard: dashboard + '/dashboard',
  client: dashboard + '/client',
  team: dashboard + '/team',
  user: dashboard + '/user',
  intentions: dashboard + '/intentions',
  addPacks: dashboard + '/add_packs',
  pack: dashboard + '/pack',
  topic: dashboard + '/topic',
  sageDashboard: dashboard + '/sage_dashboard',
  profile: dashboard + '/profile',
  userAll: dashboard + '/user-all'
}

export default DASHBOARD_ROUTES
