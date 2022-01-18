// todo: revisar, se hizo pero no se implemento aún.

import AFFIRMATIONS from '../constants/affirmations.constants'

const INITIAL_STATE = {
  newAffirmation: {
    id: '',
    name: '',
    desription: '',
    topics: []
  },
  editAffirmation: {
    id: '',
    name: '',
    desription: '',
    topics: []
  },
  lastAffirmations: [],
  affirmations: [],
  createAffirmation: null,
  loading: false,
  error: null
}

const {
  NEW_AFFIRMATION,
  LAST_AFFIRMATIONS,
  EDIT_AFFIRMATION,
  CLEAN_NEW_AFFIRMATION,
  CLEAN_EDIT_AFFIRMATION,
  CLEAN_LAST_AFFIRMATIONS,
  GET_ALL_AFFIRMATIONS,
  CREATE_AFFIRMATION,
  DELETE_AFFIRMATION,
  LOADING,
  ERROR,
  CLEAR_AFFIRMATION
} = AFFIRMATIONS

const affirmationsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_ALL_AFFIRMATIONS:
      return {
        ...state,
        affirmations: payload,
        loading: false,
        error: null
      }

    case CREATE_AFFIRMATION:
      return {
        ...state,
        createAffirmation: payload,
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

    case DELETE_AFFIRMATION:
      return {
        ...state,
        affirmations: state.affirmations.filter(a => a.id !== payload.id),
        loading: false,
        error: null
      }

    case CLEAR_AFFIRMATION:
      return {
        ...state,
        affirmations: payload,
        loading: false,
        error: null
      }

    default: return state
  }
}

export default affirmationsReducer
