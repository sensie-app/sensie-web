// amplify
import { generateClient } from '@aws-amplify/api'

// queries
import { listAllUsers } from '../../dashboard/graphql/queries'
// mutations
import {
  updateCognitoUserMutation,
  verifyCognitoUserAttributeMutation,
  resetCognitoUserPasswordMutation
} from '../../dashboard/graphql/mutations'

// constants
import USERSCOGNITO from '../constants/userscognito.constans'

const {
  GET_ALL_USERS_COGNITO,
  UPDATE_USER_COGNITO,
  VERIFY_USER_ATTRIBUTE_COGNITO,
  RESET_USER_PASSWORD_COGNITO,
  LOADING,
  ERROR,
  CLEAR_USERS_COGNITO
} = USERSCOGNITO

// Actions
export const listAllUsersCognitoAction = (limit = 10, paginationToken = null, filter = null) => async (dispatch) => {
  dispatch({ type: LOADING })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: listAllUsers(limit, paginationToken, filter) })
    // Structure matches backend response: { users: [...], paginationToken: "..." }
    const result = {
      users: response.data.listCognitoUsers.users,
      paginationToken: response.data.listCognitoUsers.paginationToken
    }

    dispatch({
      type: GET_ALL_USERS_COGNITO,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message || 'Error in list all users cognito'
    })
  }
}

export const updateCognitoUserAction = (username, attributes) => async (dispatch) => {
  dispatch({ type: LOADING })

  try {
    const client = generateClient()
    const response = await client.graphql({
      query: updateCognitoUserMutation(username, attributes)
    })

    // Check for GraphQL errors in response if client doesn't throw
    if (response.errors && response.errors.length > 0) {
      throw new Error(response.errors[0].message)
    }

    if (response.data && response.data.updateCognitoUser && response.data.updateCognitoUser.success) {
      dispatch({
        type: UPDATE_USER_COGNITO,
        payload: { username, attributes }
      })
      // We don't necessarily want to refresh the whole list and lose pagination position
      // The reducer updates the specific user in the current list
      return { success: true, message: response.data.updateCognitoUser.message }
    } else {
      const msg = response.data?.updateCognitoUser?.message || 'Error updating user'
      throw new Error(msg)
    }
  } catch (error) {
    let errorMessage = error.message || 'Error updating user'
    // Handle Amplify/GraphQL error structure in catch block
    if (error.errors && Array.isArray(error.errors) && error.errors.length > 0) {
      errorMessage = error.errors[0].message
    }

    dispatch({
      type: ERROR,
      payload: errorMessage
    })
    return { success: false, message: errorMessage }
  }
}

export const verifyCognitoUserAttributeAction = (username, attributeName, attributeValue) => async (dispatch) => {
  dispatch({ type: LOADING })

  try {
    const client = generateClient()
    const response = await client.graphql({
      query: verifyCognitoUserAttributeMutation(username, attributeName, attributeValue)
    })

    if (response.data.verifyCognitoUserAttribute.success) {
      dispatch({
        type: VERIFY_USER_ATTRIBUTE_COGNITO,
        payload: { username, attributeName, attributeValue }
      })
      // Optionally refresh list or handle local update
      // dispatch(listAllUsersCognitoAction())
      return { success: true, message: response.data.verifyCognitoUserAttribute.message }
    } else {
      throw new Error(response.data.verifyCognitoUserAttribute.message)
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message || 'Error verifying user attribute'
    })
    return { success: false, message: error.message || 'Error verifying user attribute' }
  }
}

export const resetCognitoUserPasswordAction = (username) => async (dispatch) => {
  dispatch({ type: LOADING })

  try {
    const client = generateClient()
    const response = await client.graphql({
      query: resetCognitoUserPasswordMutation(username)
    })

    if (response.data.resetCognitoUserPassword.success) {
      dispatch({
        type: RESET_USER_PASSWORD_COGNITO,
        payload: { username }
      })
      return { success: true, message: response.data.resetCognitoUserPassword.message }
    } else {
      throw new Error(response.data.resetCognitoUserPassword.message)
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message || 'Error resetting password'
    })
    return { success: false, message: error.message || 'Error resetting password' }
  }
}

export function onClearUsersCognito () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_USERS_COGNITO,
  payload: []
})
