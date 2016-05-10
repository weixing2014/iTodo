import React, { Component } from 'react'

export class TodoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props

    return (
      todos.map((todo) => {
        return (
          <li key={todo.id} onClick={ () => onTodoClick(todo.id) }>
            {todo.text}
          </li>
        )
      })
    );
  }
}
