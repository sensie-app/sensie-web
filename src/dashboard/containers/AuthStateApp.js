// react
import React, { useEffect, useState } from 'react'
import Proptypes from 'prop-types'
// redux
import { useDispatch } from 'react-redux'
import { setUserDataAction, setUserIdAction } from '../../redux/actions/user.actions'
// amplify
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import awsconfig from '../../aws-exports'
// hooks
// import useGraphQlApi from '../hooks/useGraphQlApi'
// utils
import { gqlquery } from '../utils/queries'
// graphql queries
import { getUsersByIdQuery } from '../graphql/queries'

// amplify config
Amplify.configure(awsconfig)

// * container
/**
 * AuthStateApp container (Amplify)
 * @component
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

  useEffect(async () => {
    if (user !== null && authState === 'signedin') {
      const { username } = user
      const dbUser = await handleUserQuery(username)
      dispatch(setUserDataAction(dbUser.value.data.getUser))
      dispatch(setUserIdAction(username))
    }
  }, [user])

  // ? handle functions
  /**
   * handle user query (graphQl query)
   * @param {string} id
   */
  const handleUserQuery = async id => await gqlquery(getUsersByIdQuery(id))

  return authState === AuthState.SignedIn && user
    ? <div className="App">{children}</div>
    : <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'email',
              label: 'Custom email Label',
              placeholder: 'custom email placeholder',
              required: true
            },
            {
              type: 'password',
              label: 'Custom Password Label',
              placeholder: 'custom password placeholder',
              required: true
            },
            {
              type: 'phone_number',
              label: 'Custom Phone Label',
              placeholder: 'custom Phone placeholder',
              required: false
            },
            {
              type: 'family_name',
              label: 'Last name',
              placeholder: 'custom Phone placeholder',
              required: false
            },
            {
              type: 'name',
              label: 'first name',
              placeholder: 'custom Phone placeholder',
              required: false
            },
            {
              type: 'username',
              label: 'user name',
              placeholder: 'custom Phone placeholder',
              required: false
            },
            {
              type: 'gender',
              label: 'gender',
              placeholder: 'Male',
              required: false
            },
            {
              type: 'birthdate',
              label: 'bday',
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
