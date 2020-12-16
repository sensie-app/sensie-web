// redux
import { combineReducers } from 'redux'
// reducers
import testReducer from './test.reducer'
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'

const reducers = combineReducers({
  testReducer,
  filtersReducer,
  showReducer
})

export default reducers
