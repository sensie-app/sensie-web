// redux
import { combineReducers } from 'redux'
// reducers
import testReducer from './test.reducer'
import filtersReducer from './filters.reducer'

const reducers = combineReducers({
  testReducer,
  filtersReducer
})

export default reducers
