import { addTodo, deleteTodo, deleteAll, toggleTodo, changeFilter } from 'actions/todos'

describe('(Action) Todos', () => {
  it('creates action to add a todo', () => {
    expect(addTodo('hooray')).to.eql({
      type: 'ADD_TODO',
      id: 0,
      text: 'hooray',
    })

    expect(addTodo(':(')).to.eql({
      type: 'ADD_TODO',
      id: 1,
      text: ':(',
    })
  })

  it('creates action to delete a todo', () => {
    expect(deleteTodo(0)).to.eql({
      type: 'DELETE_TODO',
      id: 0,
    })
  })

  it('creates action to delete all todos', () => {
    expect(deleteAll()).to.eql({
      type: 'DELETE_ALL',
    })
  })

  it("creates action to toggle a todo's status", () => {
    expect(toggleTodo(0)).to.eql({
      type: 'TOGGLE_TODO',
      id: 0,
    })
  })

  it('creates action to change filter', () => {
    expect(changeFilter('ACTIVE')).to.eql({
      type: 'CHANGE_FILTER',
      filter: 'ACTIVE',
    })
  })
})
