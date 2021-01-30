import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import '../styles/index.scss'
import { NotFound404 } from '../components/Globals'
import AOS from 'aos'

// Files
import theme from '../themeConfig'

// Components
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Science from '../pages/Science'
import Blog from '../pages/Blog'
import AboutSensie from '../pages/AboutSensie'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import LANDING_ROUTES from '../constants/routes'

const { home, science, blog, aboutsensie, contact, entrypoint } = LANDING_ROUTES

function App () {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <ThemeProvider theme={theme}>
        <div className='global'>
      <BrowserRouter>
        <Navbar />
          <Switch>
          <Route path={contact} component={Contact} />
          <Route path={aboutsensie} component={AboutSensie} />
          <Route path={blog} component={Blog} />
          <Route path={science} component={Science} />
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
