// amplify
import { API, graphqlOperation } from 'aws-amplify'
// queries
import { listTopicsQuery } from '../../dashboard/graphql/queries'
// constants
import TOPICS from '../constants/topics.constants'

const { TOPICS_LIST, GET_ALL_TOPICS, LOADING, ERROR } = TOPICS

export const setTopicsAction = data => {
  return {
    type: TOPICS_LIST,
    payload: data
  }
}

export const getAllTopicsAction = () => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await API.graphql(graphqlOperation(listTopicsQuery()))
    console.log(response)
    dispatch({
      type: GET_ALL_TOPICS,
      payload: response.data.listTopics.items
    })
  } catch (error) {
    console.log('err:', error)
    dispatch({
      type: ERROR,
      payload: 'Error in get topics'
    })
  }
}
