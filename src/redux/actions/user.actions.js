// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
import { getUserByIdQuery } from '../../dashboard/graphql/queries'
// constants
import USER from '../constants/user.constants'

const { USER_DATA, USER_ID, LOADING, ERROR } = USER

export const setUserDataAction = data => {
  return {
    type: USER_DATA,
    payload: data
  }
}

export const setUserIdAction = data => {
  return {
    type: USER_ID,
    payload: data
  }
}

export const getUserByIdAction = (id) => async (dispatch) => {
  console.log('id', id)
  dispatch({
    type: LOADING
  })

  try {
    const response = await API.graphql(graphqlOperation(getUserByIdQuery(id)))
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
