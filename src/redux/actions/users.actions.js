// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
// import { listUsersByOrganizationId } from '../../dashboard/graphql/queries'
import { getClientsFromCoach } from '../../dashboard/graphql/queries'
// constants
import USERS from '../constants/users.constants'

const { GET_ALL_USERS, LOADING, ERROR } = USERS

export const listUsersByOrganizationIdAction = (id, dates) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    // const response = await API.graphql(graphqlOperation(listUsersByOrganizationId(id, dates)))
    const response = await API.graphql(graphqlOperation(getClientsFromCoach(id, dates)))
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data.getUser.clients.items
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in list users'
    })
  }
}
