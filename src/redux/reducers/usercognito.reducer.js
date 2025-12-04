import USERSCOGNITO from '../constants/userscognito.constans'

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null
}

const { GET_ALL_USERS_COGNITO, LOADING, ERROR, CLEAR_USERS_COGNITO } = USERSCOGNITO

const usersCognitoReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_ALL_USERS_COGNITO:
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

    case CLEAR_USERS_COGNITO:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null
      }

    default: return state
  }
}

export default usersCognitoReducer
