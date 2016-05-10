import { combineReducers } from 'redux'
import filter from './filter'
import todoList from './todo-list'

export default combineReducers({
  filter,
  todoList,
})
