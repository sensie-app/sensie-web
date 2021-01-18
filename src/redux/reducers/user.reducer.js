import USER from '../constants/user.constants'

const INITIAL_STATE = {
  user: {
    id: null,
    loading: false,
    data: {},
    error: null
  }
}

const { USER_ID, USER_DATA, LOADING, ERROR } = USER

const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case USER_ID:
      return {
        ...state,
        user: {
          id: payload,
          data: state.user.data,
          loading: false,
          error: null
        }
      }

    case USER_DATA:
      return {
        ...state,
        user: {
          id: state.user.id,
          data: payload,
          loading: false,
          error: null
        }
      }

    case LOADING:
      return {
        ...state,
        user: {
          id: state.user.id,
          data: state.user.data,
          loading: true,
          error: null
        }
      }

    case ERROR:
      return {
        ...state,
        user: {
          id: state.user.id,
          data: state.user.data,
          loading: false,
          error: payload
        }
      }

    default: return state
  }
}

export default userReducer
