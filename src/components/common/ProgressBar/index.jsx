import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, text, color }) => (
  <div style={{ borderRadius: '5px', width: '100%', border: '1px solid grey' }}>
    <div style={{ height: '1rem', width: `${percentage}%`, backgroundColor: color }}>{text}</div>
  </div>
);

ProgressBar.defaultProps = {
  percentage: 0,
  text: '',
  color: 'grey',
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default ProgressBar;
