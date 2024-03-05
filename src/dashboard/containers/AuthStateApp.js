import Proptypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { updateUserWithCoach } from '../../dashboard/graphql/mutations'
import { setUserIdAction, getUserByIdAction } from '../../redux/actions/user.actions'

// amplify
import { API, graphqlOperation } from 'aws-amplify'
import { Auth } from '@aws-amplify/auth'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from '../../aws-exports'
// Components
// import { ToastContainer } from 'react-toastify'

// amplify config
Auth.configure(awsconfig)
// * container
/**
 * AuthStateApp container (Amplify)
 * @component
 * @param {undefined} children
 */
const AuthStateApp = ({ children }) => {
  // ? hooks
  const { user, route, signOut } = useAuthenticator((context) => [context.user, context.route])
  const dispatch = useDispatch()
  const [userData, setUser] = useState(null)
  const [authState, setAuthState] = useState()
  // const [coach, setCoach] = useState(null)

  const updateUserCoach = async (userId, coachId) => {
    const response = await API.graphql(graphqlOperation(updateUserWithCoach(userId, coachId)))
    return response
  }

  useEffect(() => {
    if (route === 'authenticated') {
      setAuthState(route)
      invinfo && user && updateUserCoach(user.username, id)
      setUser(user)
    } else {
      setAuthState(route)
    }
  }, [route])

  useEffect(async () => {
    // setCoach('test')
    if (userData !== null && authState === 'authenticated') {
      const { username } = user
      dispatch(setUserIdAction(username))
      dispatch(getUserByIdAction(username))
    }
  }, [userData])

  const q = new URLSearchParams(useLocation().search)
  const invinfo = q.get('invcode')
  const [id] = window.atob(invinfo).split(';')

  const formFields = {
    signUp: {
      email: {
        label: 'Email',
        placeholder: 'jondoe@gmail.com',
        isRequired: false,
        order: 1
      },
      password: {
        label: 'Password:',
        placeholder: 'Enter your Password:',
        isRequired: true,
        order: 2
      },
      confirm_password: {
        label: 'Confirm Password:',
        placeholder: 'Confirm your Password:',
        isRequired: true,
        order: 3
      },
      phone_number: {
        label: 'Phone #',
        placeholder: '(415) 348-9900',
        order: 4,
        isRequired: false
      },
      name: {
        label: 'First Name',
        placeholder: 'John',
        isRequired: true,
        order: 5
      },
      family_name: {
        label: 'Last Name',
        placeholder: 'Doe',
        isRequired: false,
        order: 6
      },
      gender: {
        label: 'Gender',
        placeholder: 'Gender',
        isRequired: false,
        order: 7
      },
      birthdate: {
        label: 'Birthdate',
        placeholder: '06/17/1990',
        isRequired: false
      }
    }
  }
  return user && authState === 'authenticated'
    ? <div className="App">{children} </div>
    : <Authenticator initialState='signUp' formFields={formFields}>
        <div className="App">{children}</div>
      </Authenticator>
}

// prop-types
AuthStateApp.propTypes = {
  /** children */
  children: Proptypes.element.isRequired
}

export default AuthStateApp
