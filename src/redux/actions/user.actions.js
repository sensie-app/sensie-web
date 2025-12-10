// amplify
import { generateClient } from '@aws-amplify/api'
// queries
import { getUserByIdQuery } from '../../dashboard/graphql/queries'
import { updateUserData } from '../../dashboard/graphql/mutations'
// constants
import USER from '../constants/user.constants'
import { fetchAuthSession } from 'aws-amplify/auth'

const { USER_DATA, USER_ID, LOADING, ERROR, CLEAR_USER } = USER
const ADMIN_GROUP_NAME = 'admins'
export const setUserDataAction = data => async (dispatch) => {
  try {
    const client = generateClient()
    const response = await client.graphql({ query: updateUserData(data.id, data.picture, data.infoText, data.firstName, data.lastName, data.shareData) })
    dispatch({
      type: USER_DATA,
      payload: response.data.updateUser
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: ERROR,
      payload: 'Error in update user'
    })
  }
}

export const setUserIdAction = id => {
  return {
    type: USER_ID,
    payload: id
  }
}

export const getUserByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: getUserByIdQuery(id) })
    dispatch({
      type: USER_DATA,
      payload: response.data.getUser
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in get user'
    })
  }
}

export function onClearUser () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_USER,
  payload: []
})

export const initializeUserDataAndAdminStatus = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const session = await fetchAuthSession()
    const groups = session.tokens.idToken.payload['cognito:groups'] || []
    const isAdmin = groups.includes(ADMIN_GROUP_NAME)

    dispatch({
      type: USER_DATA,
      payload: {
        isAdmin,
        isLoaded: true
      }
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in initialize user data and admin status'
    })
  }
}
