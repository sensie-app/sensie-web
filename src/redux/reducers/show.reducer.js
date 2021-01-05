import SHOW from '../constants/show.constants'
import { UserListBtns, CreatePacksTags } from '../../dashboard/constants/globals'

const INITIAL_STATE = {
  userList: {
    showInfo: UserListBtns.summary
  },
  showPacksOrTopics: CreatePacksTags.packs
}

const { SHOW_USER_LIST_INFO, SHOW_PACKS_OR_TOPICS } = SHOW

const showReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case SHOW_USER_LIST_INFO:
      return {
        ...state,
        userList: {
          showInfo: payload
        }
      }

    case SHOW_PACKS_OR_TOPICS:
      return {
        ...state,
        userList: {
          showInfo: state.userList.showInfo
        },
        showPacksOrTopics: payload
      }

    default: return state
  }
}

export default showReducer
