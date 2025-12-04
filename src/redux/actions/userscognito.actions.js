// amplify
import { generateClient } from '@aws-amplify/api'

// queries
import { listAllUsers } from '../../dashboard/graphql/queries'
// constants
import USERSCOGNITO from '../constants/userscognito.constans'

const { GET_ALL_USERS_COGNITO, LOADING, ERROR, CLEAR_USERS_COGNITO } = USERSCOGNITO

export const listAllUsersCognitoAction = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: listAllUsers() })
    dispatch({
      type: GET_ALL_USERS_COGNITO,
      payload: response.data.listCognitoUsers
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in list all users cognito'
    })
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
