import USERS from '../constants/users.constants'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

const { GET_ALL_USERS, REMOVE_USER_FROM_COACH, LOADING, ERROR, CLEAR_USERS } = USERS

const usersReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null
      }
    case REMOVE_USER_FROM_COACH:
      return {
        ...state,
        users: state.users.filter(u => u.id !== payload),
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

    case CLEAR_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null
      }

    default: return state
  }
}

export default usersReducer
