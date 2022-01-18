import INVITATIONS from '../constants/invitations.constants'

const INITIAL_STATE = {
  invitation: {
    id: null,
    packsId: [],
    createdAt: '',
    updatedAt: ''
  },
  // IMPORTANT: The initial state is loading to avoid create multiples invitations on init
  loading: true,
  error: null
}

const {
  CREATE_INVITATION,
  MODIFY_PACK_INVITATION,
  GET_INVITATION,
  GET_LAST_INVITATION,
  LOADING_INVITATIONS,
  UPDATE_INVITATIONS_LOCAL,
  ERROR_INVITATION,
  CLEAR_INVITATIONS
} = INVITATIONS

const invitationsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case CREATE_INVITATION:
      return {
        ...state,
        invitation: payload,
        loading: false,
        error: null
      }

    case MODIFY_PACK_INVITATION:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          payload
        }
      }

    case GET_INVITATION:
      return {
        ...state,
        invitation: payload,
        loading: false,
        error: null
      }

    case GET_LAST_INVITATION:
      return {
        ...state,
        invitation: payload,
        loading: false,
        error: null
      }

    case UPDATE_INVITATIONS_LOCAL:
      return {
        ...state,
        invitation: payload,
        loading: false,
        error: null
      }

    case LOADING_INVITATIONS:
      return {
        ...state,
        loading: true
      }

    case ERROR_INVITATION:
      return {
        ...state,
        loading: false,
        error: payload
      }

    case CLEAR_INVITATIONS:
      return {
        ...state,
        invitation: {
          id: null,
          packsId: [],
          createdAt: '',
          updatedAt: ''
        },
        loading: false,
        error: null
      }

    default: return state
  }
}

export default invitationsReducer
