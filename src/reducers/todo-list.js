import { List, Map } from 'immutable'

export default function todoList(state=List(), action) {
  switch(action.type) {
    case 'ADD_TODO':
      const { id, text, isCompleted } = action
      return state.push(
        Map({ id, text, isCompleted })
      )

    case 'DELETE_TODO':
      return state.filter(todo => todo.get('id') !== action.id)

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.get('id') === action.id) {
          return todo.update('isCompleted', v => !v)
        }

        return todo
      })

    case 'DELETE_ALL':
      return state.clear()

    default:
      return state
  }
}
