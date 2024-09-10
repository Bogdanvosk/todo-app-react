import PropTypes from 'prop-types';

const Complete = ({ className = '' }) => {
  return (
    <svg
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      className={className}
    >
      <g>
        <g>
          <rect width="24" height="24" opacity="0" />
          <path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
        </g>
      </g>
    </svg>
  );
};

export default Complete;

Complete.propTypes = {
  className: PropTypes.string,
};
