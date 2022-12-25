/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Text = ({
  fontSize, content, fontWeight, children,
}) => (
  <div>
    <p style={{ fontSize, fontWeight, color: '#363636' }}>
      {content}
      {' '}
      {children}
    </p>
  </div>
);

Text.defaultProps = {
  fontSize: '14px',
  content: '',
  fontWeight: 'lighter',
};

Text.propTypes = {
  fontSize: PropTypes.string,
  content: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default Text;
