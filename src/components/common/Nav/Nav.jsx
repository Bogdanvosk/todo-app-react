import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import { clearTodos, selectTodos } from '@/store/features/todosSlice';
import { content } from '@/content';

import Filter from '../Filter/Filter';
import Button from '../Button/Button';

import styles from './Nav.module.scss';

const Nav = () => {
  const dispatch = useDispatch();

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const handleSelectTodos = () => {
    dispatch(selectTodos());
  };

  return (
    <div className={styles.nav}>
      <Filter items={content.filter.items} />
      <Button
        onClick={handleClearTodos}
        className={classNames(styles.button, styles.clear)}
      >
        Clear completed
      </Button>
      <Button
        onClick={handleSelectTodos}
        className={classNames(styles.button, styles.select)}
      >
        Select all
      </Button>
      <span className={styles.count}></span>
    </div>
  );
};

export default Nav;
