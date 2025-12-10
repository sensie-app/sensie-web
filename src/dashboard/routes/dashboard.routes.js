// react
import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

// pages
import Home from '../pages/Home'
import Client from '../pages/Client'
import Team from '../pages/Team'
import User from '../pages/User'
import Affirmations from '../pages/Affirmations'
import Pack from '../pages/Pack'
import Topic from '../pages/Topic'
import SageDashboard from '../pages/SageDashboard'
import Profile from '../pages/Profile'
import UserAll from '../pages/UserAll'
// components
import { NotFound404 } from '../components/Globals'
// containers
import AuthStateApp from '../containers/AuthStateApp'
import Layout from '../containers/Layout'
// amplify
import '@aws-amplify/ui-react/styles.css'

// styles
import '../styles/index.scss'
import '../styles/amplify-ui.scss'
// doc types
import '../doc/types'
import AdminGroupGuard from '../../components/AdminGroupGuard'

// * component
/**
 * DashboardRoutes component
 * @component
 */
const DashboardRoutes = () => {
  const [initialAuthState, setInitialAuthState] = useState(false)

  const location = useLocation()
  const urlParts = location.pathname.split('/')
  const lastFragment = urlParts[urlParts.length - 1]

  useEffect(() => {
    if (lastFragment === 'login' || lastFragment === 'signup') {
      setInitialAuthState(true)
    }
  }, [lastFragment])

  return (
    <AuthStateApp>
      <Layout>
        <Routes>
          {initialAuthState && <Route path="*" element={<Navigate to="/" replace />} />}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/team" element={<Team />} />
          <Route path="/intentions" element={<Affirmations />} />
          <Route path="/sage_dashboard" element={<SageDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/pack/:id" element={<Pack />} />
          <Route path="/topic/:id" element={<Topic />} />
          <Route element={<AdminGroupGuard />}>
            <Route path="/user-all" element={<UserAll />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Layout>
    </AuthStateApp>
  )
}

export default DashboardRoutes
