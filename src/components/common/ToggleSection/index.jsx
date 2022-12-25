/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '../Button';
import './index.module.scss';

const ToggleSection = ({ buttonText, buttonVariant, children }) => {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);

  const handleToggle = () => {
    setShowAdditionalDetails(!showAdditionalDetails);
  };

  return (
    <div>
      { showAdditionalDetails && children}
      <Button
        onClickHandler={handleToggle}
        Icon={showAdditionalDetails ? RemoveCircleOutlineIcon : AddCircleOutlineIcon}
        text={showAdditionalDetails ? `Hide ${buttonText}` : `Show ${buttonText}`}
        variant={buttonVariant}
      />
    </div>
  );
};

ToggleSection.defaultProps = {
  buttonText: '',
  buttonVariant: '',
  children: [],
};

ToggleSection.propTypes = {
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
  children: PropTypes.array,
};

export default ToggleSection;
