import USERS from '../constants/users.constants'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

const { GET_ALL_USERS, LOADING, ERROR } = USERS

const usersReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
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

    default: return state
  }
}

export default usersReducer
