// amplify
import { generateClient } from 'aws-amplify/api'
// queries
import { getTopicByIdQuery, listTopicsQuery } from '../../dashboard/graphql/queries'
// constants
import TOPICS from '../constants/topics.constants'

const { TOPICS_LIST, GET_ALL_TOPICS, LOADING, ERROR, CLEAR_TOPICS } = TOPICS

const client = generateClient()

export const setTopicsAction = data => ({
  type: TOPICS_LIST,
  payload: data
})

export const getAllTopicsAction = (userTopicId) => async (dispatch) => {
  dispatch({ type: LOADING })

  try {
    let topicById = null

    if (userTopicId !== null && typeof userTopicId !== 'undefined') {
      const res = await client.graphql({
        query: getTopicByIdQuery,
        variables: { id: userTopicId }
      })
      topicById = res.data?.getTopic
    }

    const response = await client.graphql({
      query: listTopicsQuery
    })

    const items = response.data.listTopics.items ?? []

    if (topicById) {
      items.push(topicById)
    }

    dispatch({
      type: GET_ALL_TOPICS,
      payload: items
    })
  } catch (error) {
    console.error('err:', error)
    dispatch({
      type: ERROR,
      payload: 'Error in get topics'
    })
  }
}

export function onClearTopics () {
  return (dispatch) => {
    dispatch({ type: CLEAR_TOPICS, payload: [] })
  }
}
