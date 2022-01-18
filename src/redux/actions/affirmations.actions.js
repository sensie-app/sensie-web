// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
// import { listAffirmationsByUserIdAndTopicId, listAffirmationsByUserIdAndTopicIdAndUser } from '../../dashboard/graphql/queries'
import {
  getAffirmationsFromPacks,
  getAffirmationsFromPacksByUser,
  getSensiesByAffIdAndUser,
  getSensiesByAffId
} from '../../dashboard/graphql/queries'

import {
  createAffirmationMutation,
  deleteTopicAffirmationJoinMutation,
  deleteAffirmationMutation,
  joinAffirmationWithPackMutation,
  joinAffirmationWithTopicMutation,
  removeJoinAffirmationPackMutation
} from '../../dashboard/graphql/mutations'

// constants
import AFFIRMATIONS from '../constants/affirmations.constants'

const {
  NEW_AFFIRMATION,
  LAST_AFFIRMATIONS,
  EDIT_AFFIRMATION,
  CLEAN_NEW_AFFIRMATION,
  CLEAN_EDIT_AFFIRMATION,
  CLEAN_LAST_AFFIRMATIONS,
  GET_ALL_AFFIRMATIONS,
  CREATE_AFFIRMATION,
  DELETE_AFFIRMATION,
  LOADING,
  ERROR,
  CLEAR_AFFIRMATION
} = AFFIRMATIONS

export const listAffirmationsByCoachId = (id, dates, limit, user) => async dispatch => {
  dispatch({
    type: LOADING
  })
  // const action = user ? listAffirmationsByUserIdAndTopicIdAndUser(id, dates, limit, user) : listAffirmationsByUserIdAndTopicId(id, dates, limit)
  const action = user ? getAffirmationsFromPacksByUser(id, dates, limit, user) : getAffirmationsFromPacks(id, dates, limit)
  try {
    const response = await API.graphql(graphqlOperation(action))
    const packs = response.data.getUser.packs.items.map(item => {
      return item.affirmations.items.map(i => Object.assign(i, { _packName: item.name, _packId: item.id }))
    })
    const flatPacks = [].concat(...packs)
    const affs = flatPacks.map(item => Object.assign(item.affirmation, { _packName: item._packName, _packId: item._packId }))
    const _ids = affs.map(item => item.id)
    const packIds = {}
    const affsUnique = affs.filter((v, i, s) => {
      packIds[v.id] = packIds[v.id] || []
      packIds[v.id].push(v._packId)
      return _ids.indexOf(v.id) === i
    })
    const full = await Promise.all(affsUnique.map(async aff => {
      let nextToken = null
      const sAction = user ? getSensiesByAffIdAndUser(aff.id, dates, user, nextToken) : getSensiesByAffId(aff.id, dates, nextToken)
      const r = await API.graphql(graphqlOperation(sAction))
      nextToken = r.data.sensiesByAffirmationAndTimestamp.nextToken
      while (nextToken) {
        const subAction = user ? getSensiesByAffIdAndUser(aff.id, dates, user, nextToken) : getSensiesByAffId(aff.id, dates, nextToken)
        const subReq = await API.graphql(graphqlOperation(subAction))
        nextToken = subReq.data.sensiesByAffirmationAndTimestamp.nextToken
        r.data.sensiesByAffirmationAndTimestamp.items = r.data.sensiesByAffirmationAndTimestamp.items.concat(subReq.data.sensiesByAffirmationAndTimestamp.items)
      }
      return Object.assign(aff, { _packs: packIds[aff.id], sensies: r.data.sensiesByAffirmationAndTimestamp })
    }))
    dispatch({
      type: GET_ALL_AFFIRMATIONS,
      // payload: response.data.listAffirmations.items
      payload: full
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in list affirmations'
    })
  }
}

export const createAffirmationAction = (name, description, topicsId, packId, userId) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const newAffirmation = await API.graphql(graphqlOperation(createAffirmationMutation(name, description, userId)))

    if (!newAffirmation.loading && newAffirmation.value !== null) {
      const newAffirmationId = newAffirmation.value.data.createAffirmation.id
      // join pack
      await API.graphql(graphqlOperation(joinAffirmationWithPackMutation(newAffirmationId, packId)))
      // join topics
      topicsId.map(async topicId => {
        await API.graphql(graphqlOperation(joinAffirmationWithTopicMutation(newAffirmationId, topicId)))
      })

      dispatch({
        type: CREATE_AFFIRMATION,
        payload: newAffirmationId
      })
    }
    dispatch({
      type: CREATE_AFFIRMATION,
      error: 'Error in create affirmation'
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in create affirmation'
    })
  }
}

export const setNewAffirmationAction = data => {
  return {
    type: NEW_AFFIRMATION,
    payload: data
  }
}

export const setEditAffirmationAction = data => {
  return {
    type: EDIT_AFFIRMATION,
    payload: data
  }
}

export const setLastAffirmationsAction = data => {
  return {
    type: LAST_AFFIRMATIONS,
    payload: data
  }
}

export const cleanNewAffirmationAction = () => {
  return {
    type: CLEAN_NEW_AFFIRMATION
  }
}

export const cleanEditAffirmationAction = () => {
  return {
    type: CLEAN_EDIT_AFFIRMATION
  }
}

export const cleanLastAffirmationsAction = () => {
  return {
    type: CLEAN_LAST_AFFIRMATIONS
  }
}

export const deleteAffirmationAction = (affirmation) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    console.log('DELETE', affirmation)
    const packs = affirmation?.packs?.items || []
    const topics = affirmation?.topics?.items || []

    const response = await API.graphql(graphqlOperation(deleteAffirmationMutation(affirmation.id)))

    if (response?.data?.deleteAffirmation?.id) {
      await packs.map(async pack => {
        return await API.graphql(graphqlOperation(removeJoinAffirmationPackMutation(pack.idPackAffJoin)))
      })

      await topics.map(async topic => {
        return await API.graphql(graphqlOperation(deleteTopicAffirmationJoinMutation(topic.idTopicAffJoin)))
      })
    }

    console.log('DELTE AFF RESPONSE', response)
    dispatch({
      type: DELETE_AFFIRMATION,
      payload: response.data.deleteAffirmation
    })

    return true
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Error in delete affirmation'
    })

    return false
  }
}

export function onClearAff () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_AFFIRMATION,
  payload: []
})
