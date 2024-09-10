import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { clearTodos, selectTodos } from '@/store/features/todosSlice';
import { content } from '@/content';

import Filter from '../Filter/Filter';
import Button from '../Button/Button';

import s from './Nav.module.scss';

const Nav = () => {
  const dispatch = useDispatch();

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const handleSelectTodos = () => {
    dispatch(selectTodos());
  };

  return (
    <div className={s.nav}>
      <Filter items={content.filter.items} />
      <Button onClick={handleClearTodos} className={cn(s.button, s.clear)}>
        Clear completed
      </Button>
      <Button onClick={handleSelectTodos} className={cn(s.button, s.select)}>
        Select all
      </Button>
      <span className={s.count}></span>
    </div>
  );
};

export default Nav;
