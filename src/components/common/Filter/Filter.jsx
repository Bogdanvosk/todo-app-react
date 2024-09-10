import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/store/features/todosSlice';

import Button from '../Button/Button';

import styles from './Filter.module.scss';

const Filter = ({ items }) => {
  const { filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleFilter = (item) => {
    dispatch(setFilter(item));
  };

  return (
    <div className={styles.filter}>
      {items.map((item, index) => (
        <Button
          onClick={() => handleFilter(item.toLowerCase())}
          key={`${item}_${index}`}
          className={classNames(styles.button, styles.item, {
            [styles.active]: item.toLowerCase() === filter,
          })}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
