/**
 * @module UserReducer
 */

import USER from '../constants/user.constants'

/**
 * @type {INITIAL_STATE_SHOW}
 */
const INITIAL_STATE = {
  user: {
    id: null,
    last_auth: null,
    data: {},
    access_token: null
  }
}

const { USER_ID, LAST_AUTH_USER, USER_ACCESS_TOKEN, USER_DATA } = USER

/**
 * [REDUX:REDUCER] userReducer
 * @param {undefined} action
 */
const userReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case USER_ID:
      return {
        ...state,
        user: {
          id: payload,
          last_auth: state.user.last_auth,
          data: state.user.data,
          access_token: state.user.access_token
        }
      }
    case LAST_AUTH_USER:
      return {
        ...state,
        user: {
          id: state.user.id,
          last_auth: payload,
          data: state.user.data,
          access_token: state.user.access_token
        }
      }
    case USER_ACCESS_TOKEN:
      return {
        ...state,
        user: {
          id: state.user.id,
          last_auth: state.user.last_auth,
          data: state.user.data,
          access_token: payload
        }
      }
    case USER_DATA:
      return {
        ...state,
        user: {
          id: state.user.id,
          last_auth: state.user.last_auth,
          data: payload,
          access_token: state.user.access_token
        }
      }

    default: return state
  }
}

export default userReducer
