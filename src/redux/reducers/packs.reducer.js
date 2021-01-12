import PACKS from '../constants/packs.constants'

const INITIAL_STATE = {
  packs: []
}

const { PACKS_LIST } = PACKS

const packsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case PACKS_LIST:
      return {
        ...state,
        packs: payload
      }

    default: return state
  }
}

export default packsReducer
