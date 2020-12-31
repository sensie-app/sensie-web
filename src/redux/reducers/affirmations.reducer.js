/**
 * @module affirmationsReducer
 */

// todo: revisar, se hizo pero no se implemento aún.

import './doc'
import AFFIRMATIONS from '../constants/affirmations.constants'

/**
 * @type {INITIAL_STATE_FILTERS}
 */
const INITIAL_STATE = {
  newAffirmation: {
    title: '',
    topics: []
  },
  lastAffirmations: []
}

const { NEW_AFFIRMATION, LAST_AFFIRMATIONS } = AFFIRMATIONS

/**
 * [REDUX:REDUCER] affirmationsReducer
 * @param {undefined} state
 * @param {undefined} action
 */
const affirmationsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case NEW_AFFIRMATION:
      return {
        ...state,
        newAffirmation: payload
      }

    case LAST_AFFIRMATIONS:
      console.log('state.lastAffirmations', state.lastAffirmations)
      console.log('payload', payload)
      return {
        ...state,
        lastAffirmations: payload
      }

    default: return state
  }
}

export default affirmationsReducer
