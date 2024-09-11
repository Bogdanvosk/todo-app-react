import PropTypes from 'prop-types';

import cn from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={cn.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
