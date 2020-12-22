/**
 * @module UserActions
 */

import USER from '../constants/user.constants'

const { LAST_AUTH_USER, USER_ACCESS_TOKEN, USER_DATA, USER_ID } = USER

/**
 * [REDUX:ACTION] setLastAuthUserAction
 * @param {string} data
 */
export const setLastAuthUserAction = data => {
  return {
    type: LAST_AUTH_USER,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setUserAccessTokenAction
 * @param {string} data
 */
export const setUserAccessTokenAction = data => {
  return {
    type: USER_ACCESS_TOKEN,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setUserDataAction
 * @param {string} data
 */
export const setUserDataAction = data => {
  return {
    type: USER_DATA,
    payload: data
  }
}

/**
 * [REDUX:ACTION] setUserIdAction
 * @param {string} data
 */
export const setUserIdAction = data => {
  return {
    type: USER_ID,
    payload: data
  }
}
