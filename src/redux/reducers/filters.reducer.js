import FILTERS from '../constants/filters.constants'
import { MenuDateHeaderComponent, MenuFilterStateAffirmationsListComponentDefaultValueState } from '../../dashboard/constants/menus'

const INITIAL_STATE = {
  globalDateFilter: MenuDateHeaderComponent[0],
  affirmations: {
    stateFilter: MenuFilterStateAffirmationsListComponentDefaultValueState,
    topicFilter: [],
    packFilter: [],
    affirmation: null
  }
}

const { GLOBAL_DATE_FILTER, AFFIRMATIONS_STATE_FILTER, AFFIRMATIONS_PACK_FILTER, AFFIRMATIONS_TOPIC_FILTER, AFFIRMATIONS_AFFIRMATION, CLEAR_FILTERS } = FILTERS

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
          packFilter: state.affirmations.packFilter,
          topicFilter: state.affirmations.topicFilter,
          stateFilter: payload,
          affirmation: state.affirmations.affirmation
        }
      }

    case AFFIRMATIONS_PACK_FILTER:
      return {
        ...state,
        affirmations: {
          packFilter: payload,
          topicFilter: state.affirmations.topicFilter,
          stateFilter: state.affirmations.stateFilter,
          affirmation: state.affirmations.affirmation
        }
      }

    case AFFIRMATIONS_TOPIC_FILTER:
      return {
        ...state,
        affirmations: {
          packFilter: state.affirmations.packFilter,
          topicFilter: payload,
          stateFilter: state.affirmations.stateFilter,
          affirmation: state.affirmations.affirmation
        }
      }

    case AFFIRMATIONS_AFFIRMATION:
      return {
        ...state,
        affirmations: {
          packFilter: state.affirmations.packFilter,
          topicFilter: state.affirmations.topicFilter,
          stateFilter: state.affirmations.stateFilter,
          affirmation: payload
        }
      }

    case CLEAR_FILTERS:
      return {
        ...state,
        globalDateFilter: MenuDateHeaderComponent[0]
      }

    default: return state
  }
}

export default filtersReducer
