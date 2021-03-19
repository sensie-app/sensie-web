// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
import { listAffirmationsByUserIdAndTopicId, listAffirmationsByUserIdAndTopicIdAndUser } from '../../dashboard/graphql/queries'
import { createAffirmationMutation, joinAffirmationWithPackMutation, joinAffirmationWithTopicMutation } from '../../dashboard/graphql/mutations'
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
  LOADING,
  ERROR
} = AFFIRMATIONS

export const listAffirmationsByCoachId = (id, dates, limit, user) => async dispatch => {
  dispatch({
    type: LOADING
  })
  const action = user ? listAffirmationsByUserIdAndTopicIdAndUser(id, dates, limit, user) : listAffirmationsByUserIdAndTopicId(id, dates, limit)
  try {
    const response = await API.graphql(graphqlOperation(action))
    dispatch({
      type: GET_ALL_AFFIRMATIONS,
      payload: response.data.listAffirmations.items
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
