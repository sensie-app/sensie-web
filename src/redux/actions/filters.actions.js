import FILTERS from '../constants/filters.constants'

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_PACK_FILTER, AFFIRMATIONS_TOPIC_FILTER, AFFIRMATIONS_AFFIRMATION } = FILTERS

export const setGlobalDateFilterAction = data => {
  return {
    type: GLOBAL_DATE_FILTER,
    payload: data
  }
}

export const setAffirmationsStateFilterAction = data => {
  return {
    type: AFFIRMATIONS_STATE_FILTER,
    payload: data
  }
}

export const setAffirmationsPackFilterAction = data => {
  return {
    type: AFFIRMATIONS_PACK_FILTER,
    payload: data
  }
}

export const setAffirmationsTopicFilterAction = data => {
  return {
    type: AFFIRMATIONS_TOPIC_FILTER,
    payload: data
  }
}

export const setAffirmationAction = data => {
  return {
    type: AFFIRMATIONS_AFFIRMATION,
    payload: data
  }
}
