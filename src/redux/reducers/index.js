// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'
import paginationReducer from './pagination.reducer'
import userReducer from './user.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer,
  paginationReducer,
  userReducer
})

export default reducers
