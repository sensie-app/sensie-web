// react
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashboardRoutes from '../dashboard/routes/dashboard.routes'
import LandingRoutes from '../landing/routes/Routes'
// components
import { NotFound404 } from '../components'
// utils
import APP_ROUTES from '../constants/routes'

// Amplify.configure(awsExports)

const AppleAssociation = () => {
  useEffect(() => {
    window.location.reload()
  }, [])
  return null
}

const App = () => {
  const { dashboard, landing } = APP_ROUTES
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/apple-app-site-association" element={<AppleAssociation />} />
        <Route path={`${dashboard}/*`} element={<DashboardRoutes />} />
        <Route path={`${landing}/*`} element={<LandingRoutes />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
