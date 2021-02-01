// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
import { listPacksWiyhAffirmationsIdsByIdQuery } from '../../dashboard/graphql/queries'
import { createPackMutation } from '../../dashboard/graphql/mutations'
// constants
import PACKS from '../constants/packs.constants'

const { CLEAN_NEWPACK, GET_ALL_PACKS, CREATE_PACK, LOADING, ERROR } = PACKS

export const cleanNewPackAction = data => {
  return {
    type: CLEAN_NEWPACK,
    payload: data
  }
}

export const listPacksAction = id => async dispatch => {
  dispatch({
    type: LOADING
  })

  console.log('id', id)
  try {
    const response = await API.graphql(graphqlOperation(listPacksWiyhAffirmationsIdsByIdQuery(id)))
    console.log('response', response)
    dispatch({
      type: GET_ALL_PACKS,
      payload: response.data.listPacks.items
    })
  } catch (error) {
    console.log('error', error)
    dispatch({
      type: ERROR,
      payload: 'Error in list packs'
    })
  }
}

export const createPacksAction = (name, description, userId, imgKey) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await API.graphql(graphqlOperation(createPackMutation(name, description, userId, imgKey)))
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
