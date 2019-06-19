import { combineReducers } from 'redux'
import poker from './poker'
import pokeList from './pokeList'


const rootReducer = combineReducers({
  poker,pokeList
})
export default rootReducer;