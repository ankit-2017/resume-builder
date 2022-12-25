/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Styles from './index.module.scss';

const Button = ({
  // eslint-disable-next-line react/prop-types
  text, variant, Icon, onClickHandler, type = 'button', children,
}) => (
  <button type={type} className={Styles[variant]} onClick={onClickHandler}>
    {Icon && <Icon size="small" sx={{ marginRight: '5px' }} />}
    {text}
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  text: '',
  variant: 'primary',
  Icon: '',
  onClickHandler: () => {},
};

Button.propTypes = {
  type: PropTypes.arrayOf(['button', 'submit', 'reset']),
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outlined', 'text']),
  Icon: PropTypes.object,
  onClickHandler: PropTypes.func,
};

export default Button;
