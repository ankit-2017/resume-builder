/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Styles from './selectInput.module.scss';

const SelectInput = ({
  label, touched, error, optionsArray, ...rest
}) => (
  <div className={Styles.container}>
    {label && <span>{label}</span> }
    <select {...rest}>
      <option value="">Select</option>
      {
        optionsArray.map((item) => (
          <option value={item.value} key={item.id}>{item.name}</option>
        ))
      }
    </select>
    {
      touched && error && <span>{error}</span>
    }
  </div>
);
SelectInput.defaultProps = {
  label: '',
  touched: '',
  error: '',
  optionsArray: [],
};

SelectInput.propTypes = {
  label: PropTypes.string,
  touched: PropTypes.string,
  error: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  optionsArray: PropTypes.array,
};
export default SelectInput;
