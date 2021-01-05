// todo: revisar, se hizo pero no se implemento aún.

import AFFIRMATIONS from '../constants/affirmations.constants'

const INITIAL_STATE = {
  newAffirmation: {
    title: '',
    topics: []
  },
  editAffirmation: {
    title: '',
    topics: []
  },
  lastAffirmations: []
}

const {
  NEW_AFFIRMATION,
  LAST_AFFIRMATIONS,
  EDIT_AFFIRMATION,
  CLEAN_NEW_AFFIRMATION,
  CLEAN_EDIT_AFFIRMATION,
  CLEAN_LAST_AFFIRMATIONS
} = AFFIRMATIONS

const affirmationsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case NEW_AFFIRMATION:
      return {
        ...state,
        newAffirmation: payload
      }

    case EDIT_AFFIRMATION:
      return {
        ...state,
        editAffirmation: payload
      }

    case LAST_AFFIRMATIONS:
      return {
        ...state,
        lastAffirmations: payload
      }

    case CLEAN_NEW_AFFIRMATION:
      return {
        ...state,
        newAffirmation: state.newAffirmation
      }

    case CLEAN_EDIT_AFFIRMATION:
      return {
        ...state,
        editAffirmation: state.editAffirmation
      }

    case CLEAN_LAST_AFFIRMATIONS:
      return {
        ...state,
        lastAffirmations: state.lastAffirmations
      }

    default: return state
  }
}

export default affirmationsReducer
