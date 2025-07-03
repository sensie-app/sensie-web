import { generateClient } from '@aws-amplify/api'

import { createInvite, updateInvite } from '../../dashboard/graphql/mutations'
import { listLastUnusedInvitations } from '../../dashboard/graphql/queries'

import INVITATIONS from '../constants/invitations.constants'

const {
  CREATE_INVITATION,
  GET_LAST_INVITATION,
  LOADING_INVITATIONS,
  MODIFY_PACK_INVITATION,
  UPDATE_INVITATIONS_LOCAL,
  ERROR_INVITATION,
  CLEAR_INVITATIONS
} = INVITATIONS

export const getLastInvitationByCoach = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_INVITATIONS
  })

  try {
    const response = await generateClient().graphql({ query: listLastUnusedInvitations(id) })
    const invites = response.data.getUser.invites.items
    const emptyInvite = {
      id: null,
      packsId: [],
      createdAt: '',
      updatedAt: ''
    }

    // Sorting by date DESC
    invites.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    dispatch({
      type: GET_LAST_INVITATION,
      payload: invites.length > 0 ? invites[0] : emptyInvite
    })
  } catch (error) {
    dispatch({
      type: ERROR_INVITATION,
      payload: 'Error listing invitations'
    })
  }
}

export const createInvitation = (userId) => async dispatch => {
  dispatch({
    type: LOADING_INVITATIONS
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: createInvite(userId) })

    dispatch({
      type: CREATE_INVITATION,
      payload: response.data.createInvite
    })
  } catch (error) {
    dispatch({
      type: ERROR_INVITATION,
      payload: 'Error creating the invitation'
    })
  }
}

export const updateInvitation = (invitationId, packsId) => async dispatch => {
  try {
    const client = generateClient()
    await client.graphql({ query: updateInvite(invitationId, JSON.stringify(packsId)) })

    dispatch({
      type: MODIFY_PACK_INVITATION,
      payload: packsId
    })
  } catch (error) {
    dispatch({
      type: ERROR_INVITATION,
      payload: 'Error updating the invitation'
    })
  }
}

export const updateInvitationLocal = (payload) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_INVITATIONS_LOCAL,
      payload
    })
  } catch (error) {
    dispatch({
      type: ERROR_INVITATION,
      payload: 'Error updating local the invitation'
    })
  }
}

export function onClearInvitations () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_INVITATIONS,
  payload: []
})
