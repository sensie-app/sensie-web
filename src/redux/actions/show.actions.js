import SHOW from '../constants/show.constants'

const { SHOW_USER_LIST_INFO, SHOW_PACKS_OR_TOPICS, CLEAR_SHOW } = SHOW

export const setUserListInfo = data => {
  return {
    type: SHOW_USER_LIST_INFO,
    payload: data
  }
}

export const setShowPacksOrTopicsAction = data => {
  return {
    type: SHOW_PACKS_OR_TOPICS,
    payload: data
  }
}

export function onClearShow () {
  return (dispatch) => {
    dispatch(clear())
  }
}

const clear = () => ({
  type: CLEAR_SHOW,
  payload: []
})
