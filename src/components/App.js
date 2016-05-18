import React, { Component } from 'react'
import TodoList from './todo-list'
import AddTodo from './add-todo'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { dispatch, activeFilter, todoList } = this.props

    return (
      <div className="app">
        <div className="todos">
          <AddTodo dispatch={dispatch} />
          <TodoList dispatch={dispatch} activeFilter={activeFilter} todoList={todoList}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeFilter: state.activeFilter,
  todoList: state.todoList,
 })

export default connect(mapStateToProps)(App)
