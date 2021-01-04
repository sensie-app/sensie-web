// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'
import paginationReducer from './pagination.reducer'
import userReducer from './user.reducer'
import topicsReducer from './topics.reducer'
import affirmationsReducer from './affirmations.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer,
  paginationReducer,
  userReducer,
  topicsReducer,
  affirmationsReducer
})

export default reducers
