import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import '../styles/index.scss'
import { NotFound404 } from '../components/Globals'
import AOS from 'aos'

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
    <div className='global'>
      <Navbar />
      <Routes>
        <Route path={contact} element={<Contact />} />
        <Route path={aboutsensie} element={<AboutSensie />} />
        <Route path={blog} element={<Blog />} />
        <Route path={`${blog}/:id`} element={<Blog />} />
        <Route path={`${detail}/:id`} element={<DetailPost />} />
        <Route path={science} element={<Science />} />
        <Route path={home} element={<Home />} />
        <Route path={privacy} element={<Privacy />} />
        <Route path={terms} element={<Terms />} />
        <Route path={entrypoint} element={<Navigate to={home} replace />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
