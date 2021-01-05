import TOPICS from '../constants/topics.constants'

const { TOPICS_LIST } = TOPICS

export const setTopicsAction = data => {
  return {
    type: TOPICS_LIST,
    payload: data
  }
}
