/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Styles from './TextArea.module.scss';

const TextArea = ({
  label, touched, error, ...rest
}) => (
  <div className={Styles.container}>
    <span>{label}</span>
    <textarea {...rest} />
    {
      touched && error && <span>{error}</span>
    }
  </div>
);

TextArea.defaultProps = {
  touched: '',
  error: '',
  label: '',
};

TextArea.propTypes = {
  label: PropTypes.string,
  touched: PropTypes.string,
  error: PropTypes.string,
};

export default TextArea;
