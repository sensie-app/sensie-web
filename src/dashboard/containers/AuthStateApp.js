// react
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Proptypes from 'prop-types'
// redux
import { useDispatch } from 'react-redux'
import { setUserIdAction, getUserByIdAction } from '../../redux/actions/user.actions'
import { updateUserWithCoach } from '../../dashboard/graphql/mutations'
// amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify'
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
  // const [coach, setCoach] = useState(null)

  const updateUserCoach = async (userId, coachId) => {
    const response = await API.graphql(graphqlOperation(updateUserWithCoach(userId, coachId)))
    return response
  }

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      console.log(authData)
      invinfo && authData && updateUserCoach(authData.username, id)
      setUser(authData)
    })
  }, [])

  useEffect(async () => {
    // console.log(getCoach('123'))
    // setCoach('test')
    if (user !== null && authState === 'signedin') {
      const { username } = user
      dispatch(setUserIdAction(username))
      dispatch(getUserByIdAction(username))
    }
  }, [user])

  const q = new URLSearchParams(useLocation().search)

  console.log(q.get('invcode'))

  const invinfo = q.get('invcode')
  const [id, coachFirst, coachLast] = window.atob(invinfo).split(';')

  return authState === AuthState.SignedIn && user
    ? <div className="App">{children}</div>
    : <AmplifyAuthenticator initialAuthState={AuthState.SignUp}>
        <AmplifySignUp
          slot="sign-up"
          headerText={invinfo ? `Joining ${coachFirst} ${coachLast}'s team` : 'Create Account ' }
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
            //   type: 'userCoachId',
            //   label: '',
            //   value: id,
            //   required: false,
            //   name: 'CoachID',
            //   fieldId: 'tester',
            //   inputProps: { style: { display: 'none' } },
            //   disabled: true
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
