import Proptypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { updateUserWithCoach } from '../../dashboard/graphql/mutations'
import { setUserIdAction, getUserByIdAction } from '../../redux/actions/user.actions'

// amplify
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import awsconfig from '../../aws-exports'
import { generateClient } from '@aws-amplify/api'
import { Amplify } from 'aws-amplify'
// Components
// import { ToastContainer } from 'react-toastify'

// amplify config
Amplify.configure(awsconfig)
// * container
/**
 * AuthStateApp container (Amplify)
 * @component
 * @param {undefined} children
 */
const AuthStateApp = ({ children }) => {
  // ? hooks
  const { user, route } = useAuthenticator((context) => [context.user, context.route])
  const dispatch = useDispatch()
  const [userData, setUser] = useState(null)
  const [authState, setAuthState] = useState()
  const [initialAuthState, setInitialAuthState] = useState('signUp')

  // const [coach, setCoach] = useState(null)

  const updateUserCoach = async (userId, coachId) => {
    const client = generateClient()
    const response = await client.graphql({ query: updateUserWithCoach(userId, coachId) })
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

  useEffect(() => {
    if (userData !== null && authState === 'authenticated') {
      const fetchData = async () => {
        const { username } = user
        dispatch(setUserIdAction(username))
        dispatch(getUserByIdAction(username))
      }
      fetchData()
    }
  }, [userData])

  const q = new URLSearchParams(useLocation().search)
  const invinfo = q.get('invcode')
  const [id] = window.atob(invinfo).split(';')

  const location = useLocation()
  const urlParts = location.pathname.split('/')
  const lastFragment = urlParts[urlParts.length - 1]

  const validateForm = (formData) => {
    const errors = {}
    if (formData.phone_number === undefined) {
      return errors
    }
    const isPhoneNumberValid = /^\d+$/.test(formData.phone_number)
    if (!isPhoneNumberValid) {
      errors.phone_number = 'Phone number contains invalid characters'
    } else if (formData.phone_number.length !== 10) {
      // Validar que el número de teléfono tenga 10 dígitos
      errors.phone_number = 'Phone number must be 10 digits'
    }
    return errors
  }

  useEffect(() => {
    // Verificar si el parámetro 'authType' indica un login
    if (lastFragment === 'login') {
      setInitialAuthState('login') // Cambiar el initialState a signIn si es un login
    }
  }, [])

  const formFields = {
    signUp: {
      email: {
        label: 'Email',
        placeholder: 'jondoe@gmail.com',
        isRequired: true,
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
        placeholder: '4153489900',
        order: 4,
        isRequired: true
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
        isRequired: true,
        order: 6
      },
      gender: {
        label: 'Gender',
        placeholder: 'Gender',
        isRequired: true,
        order: 7
      },
      birthdate: {
        label: 'Birthdate',
        placeholder: '06/17/1990',
        isRequired: true
      }
    }
  }
  return user && authState === 'authenticated'
    ? <div className="App">{children} </div>
    : <div className="authenticator-container">
      <Authenticator
        // Default to Sign Up screen
        initialState={initialAuthState}
        formFields={formFields}
        // Customize `Authenticator.SignUp.FormFields`
        components={{
          SignUp: {
            FormFields () {
              return (
                <>
                  {/* Re-use default `Authenticator.SignUp.FormFields` */}
                  <Authenticator.SignUp.FormFields />
                </>
              )
            }
          }
        }}
        services={{
          async validateCustomSignUp (formData) {
            const formErrors = validateForm(formData)
            if (Object.keys(formErrors).length > 0) {
              return formErrors
            }
            return {}
          }
        }}
      >
      </Authenticator>
    </div>
}

// prop-types
AuthStateApp.propTypes = {
  /** children */
  children: Proptypes.element.isRequired
}

export default AuthStateApp
