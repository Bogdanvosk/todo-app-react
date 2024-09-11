import { createSelector } from '@reduxjs/toolkit';

export const selectAllTodos = (state) => state.todos.todos;
export const selectActiveFilter = (state) => state.todos.filter;

export const selectInput = (state) => state.todos.todoInput;

export const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter((item) => !item.completed);
      case 'completed':
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }
);
