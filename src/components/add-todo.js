import React, { Component } from 'react'
import { addTodo } from '../actions/todos'

export default class AddTodo extends Component {
  addTodo(e) {
    e.preventDefault()
    const input = this.refs.addTodoInput
    const value = input.value.trim()
    if (value) {
      this.props.dispatch(addTodo(value))
      input.value = ''
    }
  }

  render() {
    return (<div>
      <form onSubmit={ e => this.addTodo(e) }>
        {/*with <form>, return key will be treated as 'submit' by default
        there're two ways to invoke addTodo: 'this.addTodo.bind(this)' or 'e => this.todo(e)'. I like the later one */}
        <input type='text' ref='addTodoInput'/>
      </form>
    </div>)
  }
}
