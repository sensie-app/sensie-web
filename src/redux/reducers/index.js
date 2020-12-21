// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'
import paginationReducer from './pagination.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer,
  paginationReducer
})

export default reducers
