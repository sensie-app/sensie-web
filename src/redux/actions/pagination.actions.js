/**
 * @module PaginationActions
 */

import PAGINATION from '../constants/pagination.constants'

const { PAGINATION_AFFIRMATION, PAGINATION_AFFIRMATIONS_LIST, PAGINATION_CLIENT_SNAPSHOT, PAGINATION_USERS_LIST } = PAGINATION

/**
 * [REDUX:ACTION] setGlobalDateFilterAction
 * @param {string} data
 */
export const setPaginationAffirmationAction = data => {
  return {
    type: PAGINATION_AFFIRMATION,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setGlobalDateFilterAction
 * @param {string} data
 */
export const setPaginationAffirmationsListAction = data => {
  return {
    type: PAGINATION_AFFIRMATIONS_LIST,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setGlobalDateFilterAction
 * @param {string} data
 */
export const setPaginationClientSnapshotAction = data => {
  return {
    type: PAGINATION_CLIENT_SNAPSHOT,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setGlobalDateFilterAction
 * @param {string} data
 */
export const setPaginationUserListAction = data => {
  return {
    type: PAGINATION_USERS_LIST,
    payload: data
  }
}
