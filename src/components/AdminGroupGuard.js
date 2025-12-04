// src/components/AdminGroupGuard.js

import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { fetchAuthSession } from 'aws-amplify/auth'
import Loading from '../dashboard/components/Loading'

const AdminGroupGuard = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAdminGroup = async () => {
      try {
        // 1.Get the current user session
        const session = await fetchAuthSession()
        const groups = session.tokens.idToken.payload['cognito:groups'] || []

        // 2. Check if the 'admin' group is present
        if (groups.includes('admins')) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false) // Not admin
        }
      } catch (error) {
        // If there is an error (e.g. session expired or does not exist),
        // we assume that the user does not have permissions and handle it with the redirection.
        setIsAdmin(false)
        console.error('Error checking groups or session expired:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAdminGroup()
  }, [])

  if (loading) {
    // Show a loading indicator while querying Amplify
    return <Loading />
  }

  // 3. Decide what to render:
  // If the user is admin, render the child routes through Outlet.
  // If the user is not admin, redirect to an access denied route.

  // TODO: Create a custom access denied route and use it instead of the default one.
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard/access-denied" replace />
}

export default AdminGroupGuard
