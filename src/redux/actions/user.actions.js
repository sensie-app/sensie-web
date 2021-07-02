// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
import { getUserByIdQuery } from '../../dashboard/graphql/queries'
import { updateUserData } from '../../dashboard/graphql/mutations'
// constants
import USER from '../constants/user.constants'

const { USER_DATA, USER_ID, LOADING, ERROR } = USER

export const setUserDataAction = data => async (dispatch) => {
  try {
    const response = await API.graphql(graphqlOperation(updateUserData(data.id, data.picture, data.infoText, data.firstName, data.lastName, data.shareData)))
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

export const setUserIdAction = data => {
  return {
    type: USER_ID,
    payload: data
  }
}

export const getUserByIdAction = (id) => async (dispatch) => {
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
