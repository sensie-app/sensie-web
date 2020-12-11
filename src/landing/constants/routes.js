import APP_ROUTES from '../../constants/routes'

const { landing } = APP_ROUTES

const LANDING_ROUTES = {
  entrypoint: landing + '/',
  home: landing + '/home',
  science: landing + '/science',
  aboutsensie: landing + '/aboutsensie'
}

export default LANDING_ROUTES
