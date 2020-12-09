import FILTERS from '../constants/filters.constants'
import { MenuDateHeaderComponent } from '../../dashboard/constants/menus'

const INITIAL_STATE = {
  globalDateFilter: MenuDateHeaderComponent[0],
  affirmations: {
    stateFilter: null,
    topicFilter: null
  }
}

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_TOPIC_FILTER } = FILTERS

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GLOBAL_DATE_FILTER:
      return {
        ...state,
        globalDateFilter: action.payload
      }

    case AFFIRMATIONS_STATE_FILTER:
      return {
        ...state,
        affirmations: {
          stateFilter: action.payload,
          topicFilter: state.affirmations.topicFilter
        }
      }

    case AFFIRMATIONS_TOPIC_FILTER:
      return {
        ...state,
        affirmations: {
          topicFilter: action.payload,
          stateFilter: state.affirmations.stateFilter
        }
      }

    default: return state
  }
}

export default filtersReducer
