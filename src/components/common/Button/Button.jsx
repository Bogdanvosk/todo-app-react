import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Button.module.scss';

const Button = ({ children, type = 'button', className = '', ...props }) => {
  return (
    <button
      className={cn(s.button, className)}
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
