import TOPICS from '../constants/topics.constants'

const INITIAL_STATE = {
  topics: [],
  loading: false,
  error: null
}

const { TOPICS_LIST, GET_ALL_TOPICS, LOADING, ERROR, CLEAR_TOPICS } = TOPICS

const topicsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TOPICS_LIST:
      return {
        ...state,
        topics: payload
      }

    case GET_ALL_TOPICS:
      return {
        ...state,
        topics: payload,
        loading: false,
        error: null
      }

    case LOADING:
      return {
        ...state,
        loading: true
      }

    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }

    case CLEAR_TOPICS:
      return {
        ...state,
        topics: payload
      }

    default: return state
  }
}

export default topicsReducer
