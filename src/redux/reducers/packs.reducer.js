import PACKS from '../constants/packs.constants'

const INITIAL_STATE = {
  packs: [],
  newpack: null,
  loading: false,
  error: null
}

const { PACKS_LIST, GET_ALL_PACKS, LOADING, ERROR, CREATE_PACK, UPDATE_PACK, DELETE_PACK, CLEAN_NEWPACK, CLEAR_PACKS } = PACKS

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

    case UPDATE_PACK:
      return {
        ...state,
        packs: state.packs.map(p => p.id === payload.id ? { ...p, ...payload } : p),
        loading: false,
        error: null
      }

    case DELETE_PACK:
      return {
        ...state,
        packs: state.packs.filter(p => p.id !== payload.id),
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

    case CLEAR_PACKS:
      return {
        ...state,
        packs: payload
      }

    default: return state
  }
}

export default packsReducer
