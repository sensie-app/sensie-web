/**
 * @module FiltersActions
 */

import FILTERS from '../constants/filters.constants'

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_TOPIC_FILTER, AFFIRMATIONS_AFFIRMATION } = FILTERS

/**
 * [REDUX:ACTION] setGlobalDateFilterAction
 * @param {string} data
 */
export const setGlobalDateFilterAction = data => {
  return {
    type: GLOBAL_DATE_FILTER,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setAffirmationsStateFilterAction
 * @param {string} data
 */
export const setAffirmationsStateFilterAction = data => {
  return {
    type: AFFIRMATIONS_STATE_FILTER,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setAffirmationsTopicFilterAction
 * @param {string} data
 */
export const setAffirmationsTopicFilterAction = data => {
  return {
    type: AFFIRMATIONS_TOPIC_FILTER,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setAffirmationAction
 * @param {string} data
 */
export const setAffirmationAction = data => {
  return {
    type: AFFIRMATIONS_AFFIRMATION,
    payload: data
  }
}
