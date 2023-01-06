import PropTypes from 'prop-types';
import Styles from './index.module.scss';

const HeadingGroup = ({
  HeadingLevel, headingText, subHeadingText,
}) => (
  <div className={Styles.container}>
    <HeadingLevel>{headingText}</HeadingLevel>
    <p className={Styles.subHeadingText}>{subHeadingText}</p>
  </div>
);

HeadingGroup.defaultProps = {
  HeadingLevel: 'h2',
  headingText: '',
  subHeadingText: '',
};

HeadingGroup.propTypes = {
  HeadingLevel: PropTypes.string,
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
};

export default HeadingGroup;
