import { TEST } from '../constants/test.constants'

const INITIAL_STATE = {
  value: false
}

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        value: action.payload
      }

    default: return state
  }
}

export default testReducer
