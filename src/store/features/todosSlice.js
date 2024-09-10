import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todoInput: '',
	todos: [],
	filter: 'all'
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos = [...state.todos, action.payload]
		},
		changeInput: (state, action) => {
			state.todoInput = action.payload
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(item => item.id !== action.payload)
		},
		checkTodo: (state, action) => {
			state.todos = state.todos.map(item => {
				if (item.id === action.payload)
					return { ...item, completed: !item.completed }

				return item
			})
		},
		changeTodo: (state, action) => {
			state.todos = state.todos.map(item => {
				if (item.id === action.payload.id) return action.payload

				return item
			})
		},
		clearTodos: state => {
			state.todos = state.todos.filter(item => !item.completed)
		},
		selectTodos: state => {
			const isEveryTodoCompleted = state.todos.every(
				item => item.completed
			)

			if (isEveryTodoCompleted)
				state.todos = state.todos.map(item => ({
					...item,
					completed: false
				}))
			else
				state.todos = state.todos.map(item => ({
					...item,
					completed: true
				}))
		},
		setFilter: (state, action) => {
			state.filter = action.payload
		}
	}
})

export const {
	addTodo,
	changeInput,
	deleteTodo,
	checkTodo,
	changeTodo,
	clearTodos,
	selectTodos,
	setFilter
} = todosSlice.actions

export default todosSlice.reducer
