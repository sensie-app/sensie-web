import CHECKBOX from '../constants/checkbox.constants'

const {
  ALL_PACKS,
  ALL_TOPICS,
  ALL_CLIENTS,
  ALL_TEAMS,
  ALL_AFFIRMATIONS,
  ALL_AFFIRMATIONS_BY_TOPICS,
  PACKS,
  TOPICS,
  CLIENTS,
  TEAMS,
  AFFIRMATIONS,
  AFFIRMATIONS_BY_TOPICS
} = CHECKBOX

export const setCheckboxAllPacksAction = data => {
  return {
    type: ALL_PACKS,
    payload: data
  }
}

export const setCheckboxAllTopicsAction = data => {
  return {
    type: ALL_TOPICS,
    payload: data
  }
}

export const setCheckboxAllClientsAction = data => {
  return {
    type: ALL_CLIENTS,
    payload: data
  }
}

export const setCheckboxAllTeamsAction = data => {
  return {
    type: ALL_TEAMS,
    payload: data
  }
}

export const setCheckboxAllAffirmationsAction = data => {
  return {
    type: ALL_AFFIRMATIONS,
    payload: data
  }
}

export const setCheckboxAllAffirmationsByTopicsAction = data => {
  return {
    type: ALL_AFFIRMATIONS_BY_TOPICS,
    payload: data
  }
}

export const setCheckboxPacksAction = data => {
  return {
    type: PACKS,
    payload: data
  }
}

export const setCheckboxTopicsAction = data => {
  return {
    type: TOPICS,
    payload: data
  }
}

export const setCheckboxClientsAction = data => {
  return {
    type: CLIENTS,
    payload: data
  }
}

export const setCheckboxTeamsAction = data => {
  return {
    type: TEAMS,
    payload: data
  }
}

export const setCheckboxAffirmationsAction = data => {
  return {
    type: AFFIRMATIONS,
    payload: data
  }
}

export const setCheckboxAffirmationsByTopicsAction = data => {
  return {
    type: AFFIRMATIONS_BY_TOPICS,
    payload: data
  }
}
