/**
 * @module topicsReducer
 */

import TOPICS from '../constants/topics.constants'

/**
 * @type {INITIAL_STATE_TOPICS}
 */
const INITIAL_STATE = {
  topics: []
}

const { TOPICS_LIST } = TOPICS

/**
 * [REDUX:REDUCER] topicsReducer
 * @param {INITIAL_STATE_TOPICS} state
 */
const topicsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TOPICS_LIST:
      return {
        ...state,
        topics: payload
      }

    default: return state
  }
}

export default topicsReducer
