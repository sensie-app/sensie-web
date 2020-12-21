/**
 * @module ShowReducer
 */

import SHOW from '../constants/show.constants'
import { UserListBtns } from '../../dashboard/constants/globals'

/**
 * @type {INITIAL_STATE_SHOW}
 */
const INITIAL_STATE = {
  userList: {
    showInfo: UserListBtns.summary
  }
}

const { SHOW_USER_LIST_INFO } = SHOW

/**
 * [REDUX:REDUCER] showReducer
 * @param {INITIAL_STATE_SHOW} state
 * @param {undefined} action
 */
const showReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SHOW_USER_LIST_INFO:
      return {
        ...state,
        userList: {
          showInfo: payload
        }
      }

    default: return state
  }
}

export default showReducer
