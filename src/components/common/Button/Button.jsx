import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, type = 'button', className = '', ...props }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};
