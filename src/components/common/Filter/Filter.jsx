import cn from 'classnames';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/store/features/todos';
import { selectActiveFilter } from '@/store/features/todos/selectors';

import Button from '../Button/Button';

import s from './Filter.module.scss';

const Filter = ({ items }) => {
  const filter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();

  const handleFilter = (item) => {
    dispatch(setFilter(item));
  };

  return (
    <div className={s.filter}>
      {items.map((item, index) => (
        <Button
          onClick={() => handleFilter(item.toLowerCase())}
          key={`${item}_${index}`}
          className={cn(s.button, s.item, {
            [s.active]: item.toLowerCase() === filter,
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
