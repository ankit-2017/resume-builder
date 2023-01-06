/* eslint-disable */
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import Styles from './index.module.scss';
import Text from '../Text';

const Template1 = ({ props }) => {
  const {firstName, lastName, email, contactNo, designation, country, city, address,
    professionalSummary, employementHistory, education, skills, projects, languages} = props

  return<div className={Styles.container}>
    <div className={Styles.personalDetails}>
      <div className={Styles.leftSection}>
        <h1>
          {firstName || 'Jacob Johns'}
          {' '}
          {lastName}
        </h1>
        <p>{designation || 'Designation'}</p>
      </div>

      <div className={Styles.rightSection}>
        <div>
          <Text content={contactNo || 'Contact No.'} fontSize="15px" />
          <PhoneIcon />
        </div>
        <div>
          <Text content={email || 'Email'} fontSize="15px" />
          <EmailIcon />
        </div>
        <div>
          <Text content={`${address} ${city} ${country || 'Location'}`} fontSize="15px" />
          <LocationOnIcon />
        </div>
      </div>
    </div>
    <div className={Styles.divider} />

    {/** Professional Summary */}
    <div className={Styles.summaryWrapper}>
      <div className={Styles.summary}>
        <h3>Professional Summary</h3>
      </div>
      <Text content={professionalSummary || 'Your professional summary'} fontSize="14px" />
    </div>

    {/** Experiance */}
    <div className={Styles.employementHistory}>
      <div className={Styles.companyHeading}>
        <h3>Employement History</h3>
      </div>
      {
        employementHistory.map((item, index) => (
          <div className={Styles.companyItem}>
            <div className={Styles.companyName}>
              <h4>{item?.companyName}</h4>
              <Text content={item?.duration} />
            </div>
            <Text content={item?.jobTitle} fontSize="15px" />
            <div className={Styles.projectsInfo}>
              <ul>
                {
                  projects.map(projectItem => {
                    if (projectItem.id === item.id) {
                      return(<li>
                        <Text
                          content={projectItem.name}
                          fontSize="13px"
                          fontWeight="bold"
                        >
                          <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                            {projectItem.description}
                          </span>
                        </Text>
                      </li>)
                    }
                  })
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>

    {/** Education */}
    <div className={Styles.education}>
      <div className={Styles.companyHeading}>
        <h3>Education</h3>
      </div>
      {
        education?.map((item) => (
          <div className={Styles.educationInnerDiv}>
            <div>
              <h4>{item?.name || 'Boston University, London'}</h4>
              <Text content={item?.degree || 'Bachelors of computer science'} />
            </div>
            <div>
              <Text content={item?.duration || 'Aug 2003 - May 2007'} fontSize="15px" />
            </div>
          </div>
        ))
      }
    </div>

    {/** Skills */}
    <div className={Styles.skills}>
      <div className={Styles.companyHeading}>
        <h3>Skills</h3>
      </div>
        <div>
            <ul>
                {
                  skills?.map(item => (
                        <li>
                          <div>
                            <p>{item?.name || 'Skill name'}</p>
                            <div>
                              <ProgressBar percentage={item?.level} />
                            </div>
                          </div>
                        </li>
                  ))
                }
            </ul>
        </div>
    </div>

    {/** Languages */}
    <div className={Styles.languages}>
      <div className={Styles.companyHeading}>
        <h3>Languages</h3>
      </div>
      <div className={Styles.languageItems}>
        {
          languages.map(item => (
            <div>
              <p>{item.name}</p>
              <small>{item.level}</small>
            </div>
          ))
        }
      </div>
    </div>
  </div>
};

Template1.defaultProps = {
  personalDetailsValues: {},
  professionalSummary: '',
};

Template1.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  personalDetailsValues: PropTypes.object,
  professionalSummary: PropTypes.string,
};

export default Template1;
