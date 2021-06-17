// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
// import { listPacksWiyhAffirmationsIdsByIdQuery } from '../../dashboard/graphql/queries'
import { getPacksFromUser } from '../../dashboard/graphql/queries'
import { createPackMutation, deletePackMutation, updatePackCommunityMutation, updatePackMutation } from '../../dashboard/graphql/mutations'
// constants
import PACKS from '../constants/packs.constants'

const { CLEAN_NEWPACK, GET_ALL_PACKS, CREATE_PACK, UPDATE_PACK, DELETE_PACK, LOADING, ERROR } = PACKS

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

  console.log('id', id)
  try {
    const response = await API.graphql(graphqlOperation(getPacksFromUser(id)))
    console.log('response', response)
    // const sPacks = response.data.getUser.subscribedPacks.items.filter(i => i.pack !== null)
    // const subbedPacks = sPacks.map(i => Object.assign(i.pack, { type: 'subscription' }))
    const createdPacks = response.data.getUser.packs.items
    const data = filterPacks ? createdPacks.filter(p => filterPacks.indexOf(p.id) > -1) : createdPacks
    dispatch({
      type: GET_ALL_PACKS,
      // payload: subbedPacks.concat(createdPacks)
      payload: data
    })
  } catch (error) {
    console.log('error', error)
    dispatch({
      type: ERROR,
      payload: 'Error in list packs'
    })
  }
}

export const createPacksAction = (name, description, author, userId, imgKey) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await API.graphql(graphqlOperation(createPackMutation(name, description, author, userId, imgKey)))
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
    const response = await API.graphql(graphqlOperation(updatePackMutation(id, name, description, author, imgKey)))
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
    await API.graphql(graphqlOperation(updatePackCommunityMutation(id, isCommunityPack)))
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
    const response = await API.graphql(graphqlOperation(deletePackMutation(id)))
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
