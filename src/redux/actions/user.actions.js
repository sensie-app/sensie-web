import USER from '../constants/user.constants'

const { LAST_AUTH_USER, USER_ACCESS_TOKEN, USER_DATA, USER_ID } = USER

export const setLastAuthUserAction = data => {
  return {
    type: LAST_AUTH_USER,
    payload: data
  }
}

export const setUserAccessTokenAction = data => {
  return {
    type: USER_ACCESS_TOKEN,
    payload: data
  }
}

export const setUserDataAction = data => {
  return {
    type: USER_DATA,
    payload: data
  }
}

export const setUserIdAction = data => {
  return {
    type: USER_ID,
    payload: data
  }
}
