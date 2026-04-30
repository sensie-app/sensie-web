// amplify
import { generateClient } from 'aws-amplify/api'
import { deletePackSubscription, updateUserWithCoach } from '../../dashboard/graphql/mutations'

// queries
// import { listUsersByOrganizationId } from '../../dashboard/graphql/queries'
import { getClientFromCoach, getClientsFromCoach, listClientsCoach, listAllUsers } from '../../dashboard/graphql/queries'
// constants
import USERS from '../constants/users.constants'

const { GET_ALL_USERS, GET_ALL_USERS_COGNITO, REMOVE_USER_FROM_COACH, LOADING, ERROR, CLEAR_USERS } = USERS

export const listUsersByOrganizationIdAction = (id) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    // const response = await API.graphql(graphqlOperation(listUsersByOrganizationId(id, dates)))
    const client = generateClient()
    const response = await client.graphql({ query: getClientsFromCoach(id) })
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

export const listUsersByOrganizationDatesAction = (dates) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    // const response = await API.graphql(graphqlOperation(listUsersByOrganizationId(id, dates)))
    const client = generateClient()
    const response = await client.graphql({ query: listClientsCoach(dates) })
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data.listClientsCoach
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
    const client = generateClient()
    // Obtiene la lista completa de las suscripciones del usuario y elimina los packs que son del coach.
    // Si se detectan más páginas se vuelve recursiva la función hasta eliminar todas las suscripciones del coach
    const recursiveDelete = async (clientId, coachId, coachPacks, subscribedNextToken = null) => {
      if (coachPacks.length > 0) {
        // Consultamos las suscripciones del cliente
        const respClientFromCoach = await client.graphql({ query: getClientFromCoach(clientId, coachId, subscribedNextToken) })
        const clientData = respClientFromCoach.data.getUser.clients?.items[0] || null

        // Estandarizamos en un array
        const subscribedPacks = clientData?.subscribedPacks.items || []

        // Si tiene paginación nos preparamos para una recursividad
        subscribedNextToken = clientData?.subscribedPacks.nextToken || null

        // Nos quedamos con los packs que tienen que ver con el coach
        const filteredSubs = subscribedPacks.filter((subscription) => coachPacks.findIndex((pack) => pack.id === subscription.packId) > -1)

        // Procedemos a eliminar la suscripción de todos los packs que le pertenecen al coach
        for (const i in filteredSubs) {
          await client.graphql({ query: deletePackSubscription(filteredSubs[i].id) })
        }

        // Si detectamos recursividad la aplicamos
        if (subscribedNextToken) {
          await recursiveDelete(clientId, coachId, coachPacks, subscribedNextToken)
        }
      }

      return true
    }

    // Delete all the pack's subscriptions from the client. This action first because our query needs the coachId
    await recursiveDelete(clientId, coachId, coachPacks)

    // Delete coachId from the client
    await client.graphql({ query: updateUserWithCoach(clientId, null) })

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

export const listAllUsersCognitoAction = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: listAllUsers() })
    console.log(response.data.listCognitoUsers.users)
    dispatch({
      type: GET_ALL_USERS_COGNITO,
      payload: response.data.listCognitoUsers.users
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in list all users cognito'
    })
  }
}
export function onClearUsers () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_USERS,
  payload: []
})
