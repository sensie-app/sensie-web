import USER from '../constants/user.constants'

const INITIAL_STATE = {
  user: {
    id: null,
    loading: false,
    data: {
      isAdmin: false
    },
    error: null
  }
}

const { USER_ID, USER_DATA, LOADING, ERROR, CLEAR_USER } = USER

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
          data: {
            ...state.user.data,
            ...payload
          },
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

    case CLEAR_USER:
      return {
        ...state,
        user: {
          id: null,
          loading: false,
          data: {},
          error: null
        }
      }

    default: return state
  }
}

export default userReducer
