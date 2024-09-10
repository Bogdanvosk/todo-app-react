import PropTypes from 'prop-types';
import { useRef } from 'react';

import { addTodo, changeInput } from '@/store/features/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const MainInput = ({ placeholder, className = '', ...props }) => {
  const mainInputRef = useRef(null);

  const dispatch = useDispatch();
  const { todoInput } = useSelector((state) => state.todos);

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todoInput,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const clearMainInput = () => {
    dispatch(changeInput(''));
  };

  const handleMainInput = (e) => {
    dispatch(changeInput(e.target.value));
  };

  const handleAddTodo = (e) => {
    if (e.key !== 'Enter') return;
    addNewTodo();
    clearMainInput();
  };

  useOutsideClick(mainInputRef, () => {
    if (todoInput === '') return;

    addNewTodo();
    clearMainInput();
  });

  return (
    <input
      ref={mainInputRef}
      value={todoInput}
      onChange={handleMainInput}
      onKeyDown={handleAddTodo}
      type="text"
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

export default MainInput;

MainInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
