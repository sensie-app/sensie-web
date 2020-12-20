// redux
import { combineReducers } from 'redux'
// reducers
import filtersReducer from './filters.reducer'
import showReducer from './show.reducer'

const reducers = combineReducers({
  filtersReducer,
  showReducer
})

export default reducers
