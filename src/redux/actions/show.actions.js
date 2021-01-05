/**
 * @module ShowActions
 */

import SHOW from '../constants/show.constants'

const { SHOW_USER_LIST_INFO, SHOW_PACKS_OR_TOPICS } = SHOW

/**
 * [REDUX:ACTION] setUserListInfo
 * @param {string} data
 */
export const setUserListInfo = data => {
  return {
    type: SHOW_USER_LIST_INFO,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setUserListInfo
 * @param {string} data
 */
export const setShowPacksOrTopicsAction = data => {
  return {
    type: SHOW_PACKS_OR_TOPICS,
    payload: data
  }
}
