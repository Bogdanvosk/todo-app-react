import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';

import styles from './TodoItems.module.scss';

const TodoItems = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoItems;

TodoItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
};
