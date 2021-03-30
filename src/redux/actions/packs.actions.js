// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
// import { listPacksWiyhAffirmationsIdsByIdQuery } from '../../dashboard/graphql/queries'
import { getPacksFromUser } from '../../dashboard/graphql/queries'
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
    const response = await API.graphql(graphqlOperation(getPacksFromUser(id)))
    console.log('response', response)
    const sPacks = response.data.getUser.subscribedPacks.items.filter(i => i.pack !== null)
    const subbedPacks = sPacks.map(i => Object.assign(i.pack, { type: 'subscription' }))
    const createdPacks = response.data.getUser.packs.items
    dispatch({
      type: GET_ALL_PACKS,
      payload: subbedPacks.concat(createdPacks)
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
