import CHECKBOX from '../constants/checkbox.constants'

const INITIAL_STATE = {
  all: {
    packs: false,
    topics: false,
    clients: false,
    teams: false,
    affirmations: false,
    affirmationsByTopics: false
  },
  packs: [],
  topics: [],
  clients: [],
  teams: [],
  affirmations: [],
  affirmationsByTopics: []
}

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

const checkboxReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case ALL_PACKS:
      return {
        ...state,
        all: {
          packs: payload,
          topics: state.all.topics,
          clients: state.all.clients,
          teams: state.all.teams,
          affirmations: state.all.affirmations,
          affirmationsByTopics: state.all.affirmationsByTopics
        }
      }
    case ALL_TOPICS:
      return {
        ...state,
        all: {
          packs: state.all.packs,
          topics: payload,
          clients: state.all.clients,
          teams: state.all.teams,
          affirmations: state.all.affirmations,
          affirmationsByTopics: state.all.affirmationsByTopics
        }
      }
    case ALL_CLIENTS:
      return {
        ...state,
        all: {
          packs: state.all.packs,
          topics: state.all.topics,
          clients: payload,
          teams: state.all.teams,
          affirmations: state.all.affirmations,
          affirmationsByTopics: state.all.affirmationsByTopics
        }
      }
    case ALL_TEAMS:
      return {
        ...state,
        all: {
          packs: state.all.packs,
          topics: state.all.topics,
          clients: state.all.clients,
          teams: payload,
          affirmations: state.all.affirmations,
          affirmationsByTopics: state.all.affirmationsByTopics
        }
      }
    case ALL_AFFIRMATIONS:
      return {
        ...state,
        all: {
          packs: state.all.packs,
          topics: state.all.topics,
          clients: state.all.clients,
          teams: state.all.teams,
          affirmations: payload,
          affirmationsByTopics: state.all.affirmationsByTopics
        }
      }
    case ALL_AFFIRMATIONS_BY_TOPICS:
      return {
        ...state,
        all: {
          packs: state.all.packs,
          topics: state.all.topics,
          clients: state.all.clients,
          teams: state.all.teams,
          affirmations: state.all.affirmations,
          affirmationsByTopics: payload
        }
      }
    case PACKS:
      return {
        ...state,
        packs: payload
      }
    case TOPICS:
      return {
        ...state,
        topics: payload
      }
    case CLIENTS:
      return {
        ...state,
        clients: payload
      }
    case TEAMS:
      return {
        ...state,
        teams: payload
      }
    case AFFIRMATIONS:
      return {
        ...state,
        affirmations: payload
      }
    case AFFIRMATIONS_BY_TOPICS:
      return {
        ...state,
        affirmationsByTopics: payload
      }

    default: return state
  }
}

export default checkboxReducer
