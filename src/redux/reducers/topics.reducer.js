import TOPICS from '../constants/topics.constants'

const INITIAL_STATE = {
  topics: []
}

const { TOPICS_LIST } = TOPICS

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
