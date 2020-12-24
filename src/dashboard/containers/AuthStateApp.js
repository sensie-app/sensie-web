// react
import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types'
// redux
import { useDispatch } from 'react-redux'
import { setUserDataAction, setUserIdAction } from '../../redux/actions/user.actions'
// amplify
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from '../../aws-exports'

// amplify config
Amplify.configure(awsconfig)

// * container
/**
 * AuthStateApp container (Amplify)
 * @param {undefined} children
 */
const AuthStateApp = ({ children }) => {
  // hooks
  const dispatch = useDispatch()
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  useEffect(() => {
    if (user !== null && authState === 'signedin') {
      const { username, attributes } = user
      dispatch(setUserDataAction(attributes))
      dispatch(setUserIdAction(username))
    }
  }, [user])

  return authState === AuthState.SignedIn && user
    ? <div className="App">{children}</div>
    : <AmplifyAuthenticator>
        <AmplifySignIn hideSignUp={true} slot="sign-in" />
      </AmplifyAuthenticator>
}

// prop-types
AuthStateApp.propTypes = {
  /** children */
  children: Proptypes.element.isRequired
}

export default AuthStateApp
