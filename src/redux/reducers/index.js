// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'
import paginationReducer from './pagination.reducer'
import checkboxReducer from './checkbox.reducer'
import userReducer from './user.reducer'
import usersCognitoReducer from './usercognito.reducer'
import topicsReducer from './topics.reducer'
import packsReducer from './packs.reducer'
import usersReducer from './users.reducer'
import affirmationsReducer from './affirmations.reducer'
import invitationsReducer from './invitations.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer,
  paginationReducer,
  checkboxReducer,
  userReducer,
  topicsReducer,
  usersCognitoReducer,
  affirmationsReducer,
  packsReducer,
  usersReducer,
  invitationsReducer
})

export default reducers
