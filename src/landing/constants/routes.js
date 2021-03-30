import APP_ROUTES from '../../constants/routes'

const { landing } = APP_ROUTES

const LANDING_ROUTES = {
  entrypoint: landing + '/',
  home: landing + '/home',
  hm: landing + '/home/#hm',
  membership: landing + '/home/#membership',
  howitworks: landing + '/home/#howitworks',
  scienceanchor: landing + '/home/#science',
  science: landing + '/science',
  blog: landing + '/blog',
  aboutsensie: landing + '/aboutsensie',
  abs: landing + '/aboutsensie/#abs',
  scc: landing + '/science/#scc',
  contact: landing + '/contact',
  privacy: landing + '/privacy',
  terms: landing + '/terms'
}

export default LANDING_ROUTES
