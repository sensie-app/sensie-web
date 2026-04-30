// amplify
import { generateClient } from 'aws-amplify/api'
// queries
// import { listPacksWiyhAffirmationsIdsByIdQuery } from '../../dashboard/graphql/queries'
import { getPacksFromUser } from '../../dashboard/graphql/queries'
import { createPackMutation, deletePackMutation, updatePackCommunityMutation, updatePackMutation } from '../../dashboard/graphql/mutations'
// constants
import PACKS from '../constants/packs.constants'

const { CLEAN_NEWPACK, GET_ALL_PACKS, CREATE_PACK, UPDATE_PACK, DELETE_PACK, LOADING, ERROR, CLEAR_PACKS } = PACKS

export const cleanNewPackAction = data => {
  return {
    type: CLEAN_NEWPACK,
    payload: data
  }
}

export const listPacksAction = (id, filterPacks) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: getPacksFromUser(id) })
    // const sPacks = response.data.getUser.subscribedPacks.items.filter(i => i.pack !== null)
    // const subbedPacks = sPacks.map(i => Object.assign(i.pack, { type: 'subscription' }))
    const createdPacks = response.data.listPackFilters || []
    const data = filterPacks ? createdPacks.filter(p => filterPacks.indexOf(p.id) > -1) : createdPacks
    dispatch({
      type: GET_ALL_PACKS,
      // payload: subbedPacks.concat(createdPacks)
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in list packs'
    })
  }
}

export const createPacksAction = (name, description, author, userId, imgKey) => async dispatch => {
  try {
    const client = generateClient()
    const response = await client.graphql({ query: createPackMutation(name, description, author, userId, imgKey) })
    dispatch({
      type: CREATE_PACK,
      payload: response.data.createPack
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in create pack'
    })
  }
}

export const updatePacksAction = (id, name, description, author, imgKey) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: updatePackMutation(id, name, description, author, imgKey) })
    dispatch({
      type: UPDATE_PACK,
      payload: response.data.updatePack
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in update pack'
    })
  }
}

export const updatePackCommunityAction = (id, isCommunityPack) => async dispatch => {
  try {
    const client = generateClient()
    await client.graphql({ query: updatePackCommunityMutation(id, isCommunityPack) })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in update pack'
    })
  }
}

export const deletePacksAction = (id) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const client = generateClient()
    const response = await client.graphql({ query: deletePackMutation(id) })
    dispatch({
      type: DELETE_PACK,
      payload: response.data.deletePack
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in delete pack'
    })
  }
}

export function onClearPacks () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_PACKS,
  payload: []
})
