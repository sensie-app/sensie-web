// amplify
import { API, graphqlOperation } from 'aws-amplify'
import { deletePackSubscription, updateUserWithCoach } from '../../dashboard/graphql/mutations'

// queries
// import { listUsersByOrganizationId } from '../../dashboard/graphql/queries'
import { getClientFromCoach, getClientsFromCoach } from '../../dashboard/graphql/queries'
// constants
import USERS from '../constants/users.constants'

const { GET_ALL_USERS, REMOVE_USER_FROM_COACH, LOADING, ERROR } = USERS

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

export const removeClientFromCoachAction = (clientId, coachId, coachPacks) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    // Obtiene la lista completa de las suscripciones del usuario y elimina los packs que son del coach.
    // Si se detectan más páginas se vuelve recursiva la función hasta eliminar todas las suscripciones del coach
    const recursiveDelete = async (clientId, coachId, coachPacks, nextToken = null) => {
      if (coachPacks.length > 0) {
        const respClientFromCoach = await API.graphql(graphqlOperation(getClientFromCoach(clientId, coachId, nextToken)))
        const client = respClientFromCoach.data.getUser.clients?.items[0] || null
        const subscribedPacks = client?.subscribedPacks.items || []
        nextToken = client?.subscribedPacks.nextToken || null

        const filteredSubs = subscribedPacks.filter((subscription) => coachPacks.findIndex((pack) => pack.id === subscription.packId) > -1)

        for (const i in filteredSubs) {
          await API.graphql(graphqlOperation(deletePackSubscription(filteredSubs[i].id)))
        }

        if (nextToken) {
          // eslint-disable-next-line no-unused-vars
          await recursiveDelete(clientId, coachId, coachPacks, nextToken)
        }
      }

      return true
    }

    // Delete all the pack's subscriptions from the client. This action first because our query needs the coachId
    await recursiveDelete(clientId, coachId, coachPacks)

    // Delete coachId from the client
    await API.graphql(graphqlOperation(updateUserWithCoach(clientId, null)))

    dispatch({
      type: REMOVE_USER_FROM_COACH,
      payload: clientId
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: ERROR,
      payload: 'Error removing the user'
    })
  }
}
