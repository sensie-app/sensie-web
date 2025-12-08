import USERSCOGNITO from '../constants/userscognito.constans'

const INITIAL_STATE = {
  users: [],
  paginationToken: null,
  loading: false,
  error: null
}

const {
  GET_ALL_USERS_COGNITO,
  UPDATE_USER_COGNITO,
  VERIFY_USER_ATTRIBUTE_COGNITO,
  RESET_USER_PASSWORD_COGNITO,
  LOADING,
  ERROR,
  CLEAR_USERS_COGNITO
} = USERSCOGNITO

const usersCognitoReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GET_ALL_USERS_COGNITO:
      return {
        ...state,
        users: payload.users,
        paginationToken: payload.paginationToken,
        loading: false,
        error: null
      }

    case UPDATE_USER_COGNITO:
      // Update the user in the list if it exists to avoid refetching immediately
      // This is optimistic update for better UX
      return {
        ...state,
        users: state.users.map(user => {
          if (user.Username === payload.username) {
            // Create new attributes array with updated values
            const updatedAttributes = { ...user.Attributes }
            payload.attributes.forEach(attr => {
              updatedAttributes[attr.Name] = attr.Value
            })
            return {
              ...user,
              Attributes: updatedAttributes
            }
          }
          return user
        }),
        loading: false,
        error: null
      }

    case VERIFY_USER_ATTRIBUTE_COGNITO:
      return {
        ...state,
        loading: false,
        error: null
      }

    case RESET_USER_PASSWORD_COGNITO:
      return {
        ...state,
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
        users: [],
        paginationToken: null,
        loading: false,
        error: null
      }

    default: return state
  }
}

export default usersCognitoReducer
