import PropTypes from 'prop-types';
import cn from 'classnames';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, checkTodo } from '@/store/features/todosSlice';

import TodoInput from '../TodoInput/TodoInput';
import Icon from '../Icon/Icon';

import s from './TodoItem.module.scss';

const TodoItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const todoInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    isEditing && todoInputRef.current.focus();
  }, [isEditing]);

  const onDeleteTodo = () => {
    dispatch(deleteTodo(item.id));
  };

  const onCheckTodo = () => {
    dispatch(checkTodo(item.id));
  };

  const changeTodoView = () => {
    setIsEditing(!isEditing);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div
      onDoubleClick={changeTodoView}
      className={cn(s.item, {
        [s.completed]: item.completed,
      })}
    >
      <span onClick={onCheckTodo} className={s.check}>
        <Icon name='complete' fill='#000' className={s.checkIcon} />
      </span>
      <p className={s.text}>{item.text}</p>
      {isEditing && (
        <TodoInput
          ref={todoInputRef}
          stopEditing={stopEditing}
          item={item}
          className={cn(s.change, {
            [s.hidden]: !isEditing,
          })}
        />
      )}

      <button onClick={onDeleteTodo} className={s.delete}></button>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
