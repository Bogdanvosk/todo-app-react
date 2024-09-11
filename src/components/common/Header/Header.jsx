import PropTypes from 'prop-types';

import s from './Header.module.scss';

const Header = ({ title }) => {
  return (
    <header>
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
