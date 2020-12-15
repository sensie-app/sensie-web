import SHOW from '../constants/show.constants'

const { SHOW_USER_LIST_INFO } = SHOW

export const setUserListInfo = data => {
  return {
    type: SHOW_USER_LIST_INFO,
    payload: data
  }
}
