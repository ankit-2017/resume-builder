import PropTypes from 'prop-types';

const HeadingGroup = ({
  HeadingLevel, headingText, subHeadingText,
}) => (
  <div style={{ lineHeight: 1.5 }}>
    <HeadingLevel>{headingText}</HeadingLevel>
    <p style={{ color: 'GrayText', fontSize: '13px', fontWeight: '600' }}>{subHeadingText}</p>
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
