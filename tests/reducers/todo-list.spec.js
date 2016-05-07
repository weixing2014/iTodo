import { todoList } from 'reducers/todo-list'
import { Map, List, fromJS } from 'immutable'

describe('(Reducer) TodoList', () => {
  it('has default value', () => {
    const nextTodoList = todoList(undefined, {})
    expect(nextTodoList).to.eql(List())
  })

  it('adds a todo', () => {
    const nextTodoList = todoList(List(), {
      type: 'ADD_TODO',
      id: 1,
      text: 'hooray',
      isCompleted: false,
    })

    expect(nextTodoList).to.eql(fromJS(
      [{
        id: 1,
        text: 'hooray',
        isCompleted: false,
      }]
    ))
  })

  it('removes a todo', () => {
    const nextTodoList = todoList(
      fromJS([{
        id: 1,
        text: 'hooray',
        isCompleted: false,
      }]),
      {
        type: 'DELETE_TODO',
        id: 1,
      }
    )

    expect(nextTodoList).to.eql(List())
  })

  it('toggles a todo between completed and incompleted', () => {
    const nextTodoList = todoList(
      fromJS([{
        id: 1,
        text: 'hooray',
        isCompleted: false,
      }]),
      {
        type: 'TOGGLE_TODO',
        id: 1,
      }
    )

    expect(nextTodoList).to.eql(fromJS([{
      id: 1,
      text: 'hooray',
      isCompleted: true,
    }]))
  })
})
