import APP_ROUTES from '../../constants/routes'

const { dashboard } = APP_ROUTES

const DASHBOARD_ROUTES = {
  entrypoint: dashboard + '/',
  home: dashboard + '/home',
  client: dashboard + '/client',
  team: dashboard + '/team',
  user: dashboard + '/user',
  affirmations: dashboard + '/affirmations',
  addPacks: dashboard + '/add_packs',
  pack: dashboard + '/pack',
  topic: dashboard + '/topic',
  sageDashboard: dashboard + '/sage_dashboard'
}

export default DASHBOARD_ROUTES
