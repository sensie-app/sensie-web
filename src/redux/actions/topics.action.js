/**
 * @module TopicsActions
 */

import TOPICS from '../constants/topics.constants'

const { TOPICS_LIST } = TOPICS

/**
 * [REDUX:ACTION] setTopicsAction
 * @param {Array.TOPICS} data
 */
export const setTopicsAction = data => {
  return {
    type: TOPICS_LIST,
    payload: data
  }
}
