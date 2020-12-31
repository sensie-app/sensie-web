/**
 * @module AffirmationsActions
 */

import AFFIRMATIONS from '../constants/affirmations.constants'

const { NEW_AFFIRMATION, LAST_AFFIRMATIONS } = AFFIRMATIONS

/**
 * [REDUX:ACTION] setNewAffirmation
 * @param {string} data
 */
export const setNewAffirmationAction = data => {
  return {
    type: NEW_AFFIRMATION,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setLastAffirmations
 * @param {string} data
 */
export const setLastAffirmationsAction = data => {
  return {
    type: LAST_AFFIRMATIONS,
    payload: data
  }
}
