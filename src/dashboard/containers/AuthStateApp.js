// react
import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types'
// redux
import { useDispatch } from 'react-redux'
import { setUserIdAction, getUserByIdAction } from '../../redux/actions/user.actions'
// amplify
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from '../../aws-exports'

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
  const dispatch = useDispatch()
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  useEffect(async () => {
    if (user !== null && authState === 'signedin') {
      const { username } = user
      dispatch(setUserIdAction(username))
      dispatch(getUserByIdAction(username))
    }
  }, [user])

  return authState === AuthState.SignedIn && user
    ? <div className="App">{children}</div>
    : <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'email',
              label: 'Email',
              placeholder: 'jondoe@gmail.com',
              required: true
            },
            {
              type: 'password',
              label: 'Password',
              placeholder: '',
              required: true
            },
            {
              type: 'phone_number',
              label: 'Phone #',
              placeholder: '(415) 348-9900',
              required: false
            },
            {
              type: 'name',
              label: 'First Name',
              placeholder: 'John',
              required: false
            },
            {
              type: 'family_name',
              label: 'Last Name',
              placeholder: 'Doe',
              required: false
            },
            // {
            //   type: 'username',
            //   label: 'user name',
            //   placeholder: 'custom Phone placeholder',
            //   required: false
            // },
            {
              type: 'gender',
              label: 'Gender',
              placeholder: 'Male',
              required: false
            },
            {
              type: 'birthdate',
              label: 'Birthdate',
              placeholder: '06/17/1990',
              required: false
            }
            // {
            //   type: 'organization_id',
            //   label: 'organizationId',
            //   placeholder: 'ORG1',
            //   required: true
            // }

          ]}
        />
      </AmplifyAuthenticator>
}

// prop-types
AuthStateApp.propTypes = {
  /** children */
  children: Proptypes.element.isRequired
}

export default AuthStateApp
