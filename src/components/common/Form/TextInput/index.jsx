/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Styles from './index.module.scss';

export const Index = ({
  label, validationText, error, ...rest
}) => (
  <div className={Styles.container}>
    { label && <span>{label}</span> }
    <input {...rest} />
    {
      error && <span>{validationText}</span>
    }
  </div>
);

Index.defaultProps = {
  label: '',
  touched: '',
  error: '',
  validationText: '',
};

Index.propTypes = {
  label: PropTypes.string,
  touched: PropTypes.string,
  error: PropTypes.string,
  validationText: PropTypes.string,

};

export default Index;
