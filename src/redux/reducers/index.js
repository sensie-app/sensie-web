// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'
import paginationReducer from './pagination.reducer'
import checkboxReducer from './checkbox.reducer'
import userReducer from './user.reducer'
import topicsReducer from './topics.reducer'
import packsReducer from './packs.reducer'
import usersReducer from './users.reducer'
import affirmationsReducer from './affirmations.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer,
  paginationReducer,
  checkboxReducer,
  userReducer,
  topicsReducer,
  affirmationsReducer,
  packsReducer,
  usersReducer
})

export default reducers
