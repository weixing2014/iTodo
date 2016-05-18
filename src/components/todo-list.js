import React, { Component } from 'react'

export default class TodoList extends Component {
  renderTodoList() {
    const { todoList } = this.props

    return todoList.map( todo => (
      <li key={todo.get('id')} >
        {todo.get('text')}
      </li>
    ))
  }

  render() {
    const { todoList, activeFilter, dispatch } = this.props

    return (
      <div>
        {
          !!todoList.size && (<ul>{this.renderTodoList()}</ul>)
        }
      </div>
    )
  }
}
