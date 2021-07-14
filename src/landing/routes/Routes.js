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
import DetailPost from '../pages/DetailPost'
import AboutSensie from '../pages/AboutSensie'
import Contact from '../pages/Contact'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Footer from '../components/Footer'
import LANDING_ROUTES from '../constants/routes'

const { home, science, blog, detail, aboutsensie, contact, entrypoint, privacy, terms } = LANDING_ROUTES

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
            <Route exact path={blog} component={Blog} />
            <Route path={blog + '/:id'} component={Blog} />
            <Route path={detail + '/:id'} component={DetailPost} />
            <Route path={science} component={Science} />
            <Route path={home} component={Home} />
            <Route path={privacy} component={Privacy} />
            <Route path={terms} component={Terms} />
            <Redirect from={entrypoint} to={home} />
            <Route component={NotFound404} />
          </Switch>
        <Footer />
      </BrowserRouter>
        </div>
    </ThemeProvider>
  )
}

export default App
