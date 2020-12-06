import FILTERS from '../constants/filters.constants'

const { GLOBAL_DATE_FILTER } = FILTERS

export const setGlobalDateFilterAction = data => {
  return {
    type: GLOBAL_DATE_FILTER,
    payload: data
  }
}
