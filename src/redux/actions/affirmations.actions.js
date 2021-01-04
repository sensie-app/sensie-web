/**
 * @module AffirmationsActions
 */

import AFFIRMATIONS from '../constants/affirmations.constants'

const {
  NEW_AFFIRMATION,
  LAST_AFFIRMATIONS,
  EDIT_AFFIRMATION,
  CLEAN_NEW_AFFIRMATION,
  CLEAN_EDIT_AFFIRMATION,
  CLEAN_LAST_AFFIRMATIONS
} = AFFIRMATIONS

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
 * [REDUX:ACTION] setEditAffirmation
 * @param {string} data
 */
export const setEditAffirmationAction = data => {
  return {
    type: EDIT_AFFIRMATION,
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

/**
 * [REDUX:ACTION] cleanNewAffirmation
 */
export const cleanNewAffirmationAction = () => {
  return {
    type: CLEAN_NEW_AFFIRMATION
  }
}

/**
 * [REDUX:ACTION] cleanEditAffirmation
 */
export const cleanEditAffirmationAction = () => {
  return {
    type: CLEAN_EDIT_AFFIRMATION
  }
}

/**
 * [REDUX:ACTION] cleanLastAffirmations
 */
export const cleanLastAffirmationsAction = () => {
  return {
    type: CLEAN_LAST_AFFIRMATIONS
  }
}
