/* eslint-disable */
import PropTypes from 'prop-types';
import Styles from './index.module.scss';

export const Index = ({
  field, form: { touched, errors }, label, validationText, error, ...rest
}) => (
  <div className={Styles.container}>
    { label && <span>{label}</span> }
    <input {...field} {...rest} />
    {
      touched[field.name] && errors[field.name] && <span>{errors[field.name]}</span>
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
