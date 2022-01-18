import PAGINATION from '../constants/pagination.constants'

const INITIAL_STATE = {
  pagination: {
    pagAffirmation: 1,
    pagAffirmationsList: 1,
    pagClientSpanshot: 1,
    pagUsersList: 1
  }
}

const { PAGINATION_AFFIRMATION, PAGINATION_AFFIRMATIONS_LIST, PAGINATION_CLIENT_SNAPSHOT, PAGINATION_USERS_LIST, CLEAR_PAGINATION } = PAGINATION

const paginationReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case PAGINATION_AFFIRMATION:
      return {
        ...state,
        pagination: {
          pagAffirmation: payload,
          pagAffirmationsList: state.pagination.pagAffirmationsList,
          pagClientSpanshot: state.pagination.pagClientSpanshot,
          pagUsersList: state.pagination.pagUsersList
        }
      }
    case PAGINATION_AFFIRMATIONS_LIST:
      return {
        ...state,
        pagination: {
          pagAffirmation: state.pagination.pagAffirmation,
          pagAffirmationsList: payload,
          pagClientSpanshot: state.pagination.pagClientSpanshot,
          pagUsersList: state.pagination.pagUsersList
        }
      }
    case PAGINATION_CLIENT_SNAPSHOT:
      return {
        ...state,
        pagination: {
          pagAffirmation: state.pagination.pagAffirmation,
          pagAffirmationsList: state.pagination.pagAffirmationsList,
          pagClientSpanshot: payload,
          pagUsersList: state.pagination.pagUsersList
        }
      }
    case PAGINATION_USERS_LIST:
      return {
        ...state,
        pagination: {
          pagAffirmation: state.pagination.pagAffirmation,
          pagAffirmationsList: state.pagination.pagAffirmationsList,
          pagClientSpanshot: state.pagination.pagClientSpanshot,
          pagUsersList: payload
        }
      }
    case CLEAR_PAGINATION:
      return {
        ...state,
        pagination: {
          pagAffirmation: 1,
          pagAffirmationsList: 1,
          pagClientSpanshot: 1,
          pagUsersList: 1
        }
      }

    default: return state
  }
}

export default paginationReducer
