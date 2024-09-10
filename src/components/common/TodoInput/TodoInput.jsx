import PropTypes from 'prop-types';

import { forwardRef, useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo } from '@/store/features/todosSlice';

const TodoInput = forwardRef(
  ({ item, className = '', stopEditing = () => {}, ...props }, ref) => {
    const [editableInputValue, setEditableInputValue] = useState(item.text);

    const dispatch = useDispatch();

    const deleteEmptyTodo = (id) => {
      if (editableInputValue === '') {
        dispatch(deleteTodo(id));
      }
    };

    const handleEditTodo = (e) => {
      setEditableInputValue(e.target.value);
    };

    const handleChangeTodo = (e) => {
      const newTodo = { ...item, text: editableInputValue };

      if (e.key === 'Enter') {
        deleteEmptyTodo(item.id);
        dispatch(changeTodo(newTodo));
        stopEditing();
      } else if (e.key === 'Escape') {
        dispatch(changeTodo(item));
        setEditableInputValue(item.text);
        stopEditing();
      }
    };

    const todoInputRef = useRef(null);

    useOutsideClick(ref || todoInputRef, () => {
      deleteEmptyTodo(item.id);
      dispatch(changeTodo({ ...item, text: editableInputValue }));
      stopEditing();
    });

    return (
      <input
        ref={ref || todoInputRef}
        value={editableInputValue}
        onChange={handleEditTodo}
        onKeyDown={handleChangeTodo}
        type="text"
        className={className}
        {...props}
      />
    );
  }
);

export default TodoInput;

TodoInput.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
  className: PropTypes.string,
  stopEditing: PropTypes.func,
};
