let id = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: id++,
    text,
  }
}

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
})

export const deleteAll = () => ({
  type: 'DELETE_ALL',
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
})
