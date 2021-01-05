import AFFIRMATIONS from '../constants/affirmations.constants'

const {
  NEW_AFFIRMATION,
  LAST_AFFIRMATIONS,
  EDIT_AFFIRMATION,
  CLEAN_NEW_AFFIRMATION,
  CLEAN_EDIT_AFFIRMATION,
  CLEAN_LAST_AFFIRMATIONS
} = AFFIRMATIONS

export const setNewAffirmationAction = data => {
  return {
    type: NEW_AFFIRMATION,
    payload: data
  }
}

export const setEditAffirmationAction = data => {
  return {
    type: EDIT_AFFIRMATION,
    payload: data
  }
}

export const setLastAffirmationsAction = data => {
  return {
    type: LAST_AFFIRMATIONS,
    payload: data
  }
}

export const cleanNewAffirmationAction = () => {
  return {
    type: CLEAN_NEW_AFFIRMATION
  }
}

export const cleanEditAffirmationAction = () => {
  return {
    type: CLEAN_EDIT_AFFIRMATION
  }
}

export const cleanLastAffirmationsAction = () => {
  return {
    type: CLEAN_LAST_AFFIRMATIONS
  }
}
