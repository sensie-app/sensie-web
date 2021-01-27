import PACKS from '../constants/packs.constants'

const INITIAL_STATE = {
  packs: [],
  newpack: null,
  loading: false,
  error: null
}

const { PACKS_LIST, GET_ALL_PACKS, LOADING, ERROR, CREATE_PACK, CLEAN_NEWPACK } = PACKS

const packsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case PACKS_LIST:
      return {
        ...state,
        packs: payload
      }

    case GET_ALL_PACKS:
      return {
        ...state,
        packs: payload,
        loading: false,
        error: null
      }

    case CREATE_PACK:
      return {
        ...state,
        newpack: payload,
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

    case CLEAN_NEWPACK:
      return {
        ...state,
        loading: false,
        error: null,
        newpack: null
      }

    default: return state
  }
}

export default packsReducer
