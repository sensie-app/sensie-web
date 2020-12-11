import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import '../styles/index.scss'
import { NotFound404 } from '../components/Globals'

// Files
import theme from '../themeConfig'

// Components
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Science from '../pages/Science'
import AboutSensie from '../pages/AboutSensie'
import Footer from '../components/Footer'
import LANDING_ROUTES from '../constants/routes'

const { home, science, aboutsensie, entrypoint } = LANDING_ROUTES

function App () {
  return (
    <ThemeProvider theme={theme}>
        <div className='global'>
      <BrowserRouter>
        <Navbar />
          <Switch>
          <Route path={science} component={Science} />
          <Route path={aboutsensie} component={AboutSensie} />
          <Route path={home} component={Home} />
          <Redirect from={entrypoint} to={home} />
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
      <Footer />
        </div>
    </ThemeProvider>
  )
}

export default App
