import reducer1 from './reducer1'
import reducer2 from './reducer2'
import { combineReducers } from 'redux'

const reducer = combineReducers({reducer1, reducer2})

export default reducer