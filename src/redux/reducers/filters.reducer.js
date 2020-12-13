import FILTERS from '../constants/filters.constants'
import { MenuDateHeaderComponent, MenuFilterStateListAffirmationsComponentDefaultValueState } from '../../dashboard/constants/menus'

const INITIAL_STATE = {
  globalDateFilter: MenuDateHeaderComponent[0],
  affirmations: {
    stateFilter: MenuFilterStateListAffirmationsComponentDefaultValueState,
    topicFilter: []
  }
}

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_TOPIC_FILTER } = FILTERS

const filtersReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case GLOBAL_DATE_FILTER:
      return {
        ...state,
        globalDateFilter: payload
      }

    case AFFIRMATIONS_STATE_FILTER:
      return {
        ...state,
        affirmations: {
          stateFilter: payload,
          topicFilter: state.affirmations.topicFilter
        }
      }

    case AFFIRMATIONS_TOPIC_FILTER:
      return {
        ...state,
        affirmations: {
          topicFilter: payload,
          stateFilter: state.affirmations.stateFilter
        }
      }

    default: return state
  }
}

export default filtersReducer
