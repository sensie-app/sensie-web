import FILTERS from '../constants/filters.constants'
import { MenuDateHeaderComponent, MenuFilterStateAffirmationsListComponentDefaultValueState } from '../../dashboard/constants/menus'

const INITIAL_STATE = {
  globalDateFilter: MenuDateHeaderComponent[0],
  affirmations: {
    stateFilter: MenuFilterStateAffirmationsListComponentDefaultValueState,
    topicFilter: [],
    affirmation: null
  }
}

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_TOPIC_FILTER, AFFIRMATIONS_AFFIRMATION } = FILTERS

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
          topicFilter: state.affirmations.topicFilter,
          stateFilter: payload,
          affirmation: state.affirmations.affirmation
        }
      }

    case AFFIRMATIONS_TOPIC_FILTER:
      return {
        ...state,
        affirmations: {
          topicFilter: payload,
          stateFilter: state.affirmations.stateFilter,
          affirmation: state.affirmations.affirmation
        }
      }

    case AFFIRMATIONS_AFFIRMATION:
      return {
        ...state,
        affirmations: {
          topicFilter: state.affirmations.topicFilter,
          stateFilter: state.affirmations.stateFilter,
          affirmation: payload
        }
      }

    default: return state
  }
}

export default filtersReducer
