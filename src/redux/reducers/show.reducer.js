import SHOW from '../constants/show.constants'
import { UserListBtns } from '../../dashboard/constants/globals'

const INITIAL_STATE = {
  userList: {
    showInfo: UserListBtns.summary
  }
}

const { SHOW_USER_LIST_INFO } = SHOW

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
