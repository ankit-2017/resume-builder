import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProgressBar from '../ProgressBar';
import Styles from './index.module.scss';
import Text from '../Text';

const Template1 = () => (
  <div className={Styles.container}>
    <div className={Styles.personalDetails}>
      <div className={Styles.leftSection}>
        <h1>Jacab Johns</h1>
        <p>Software Engineer</p>
      </div>

      <div className={Styles.rightSection}>
        <div>
          <Text content="1234567890" fontSize="15px" />
          <PhoneIcon />
        </div>
        <div>
          <Text content="youremail@example.com" fontSize="15px" />
          <EmailIcon />
        </div>
        <div>
          <Text content="A-164, west coast, 3rd street, London-11111" fontSize="15px" />
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
      <Text content="lorem lorem lorem lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem" fontSize="14px" />
    </div>

    {/** Education */}
    <div className={Styles.education}>
      <div className={Styles.companyHeading}>
        <h3>Education</h3>
      </div>
      <div>
        <h4>Boston University, London</h4>
        <Text content="aug 2012 - July 2015" />
      </div>
      <div>
        <Text content="Bachelors of computer science" fontSize="15px" />
      </div>
    </div>

    {/** Skills */}
    <div className={Styles.skills}>
      <div className={Styles.companyHeading}>
        <h3>Skills</h3>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <p>Skill 1</p>
              <div>
                <ProgressBar percentage={20} />
              </div>

            </div>
          </li>
          <li>
            <div>
              <p>Skill 2</p>
              <ProgressBar percentage={50} />
            </div>
          </li>
          <li>
            <div>
              <p>Skill 3</p>
              <ProgressBar percentage={100} />
            </div>
          </li>
          <li>
            <div>
              <p>Skill 4</p>
              <ProgressBar percentage={60} />
            </div>
          </li>
          <li>
            <div>
              <p>Skill 5</p>
              <ProgressBar percentage={30} />
            </div>
          </li>
          <li>
            <div>
              <p>Skill 6</p>
              <ProgressBar percentage={30} />
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/** Experiance */}
    <div className={Styles.employementHistory}>
      <div className={Styles.companyHeading}>
        <h3>Employement History</h3>
      </div>
      <div className={Styles.companyItem}>
        <div className={Styles.companyName}>
          <h4>Company Name</h4>
          <Text content="Aug 2015- July 2020" />
        </div>
        <Text content="Software Developer" fontSize="15px" />
        <div className={Styles.projectsInfo}>
          <ul>
            <li>
              <Text
                content="Project Title:"
                fontSize="13px"
                fontWeight="bold"
              >
                <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.Repellendus a,
                </span>
              </Text>
            </li>
            <li>
              <Text
                content="Project Title:"
                fontSize="13px"
                fontWeight="bold"
              >
                <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.Repellendus a, consectetur adipisicing
                  elit.Repellendus a,
                </span>
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.companyItem}>
        <div className={Styles.companyName}>
          <h4>Company Name</h4>
          <Text content="Aug 2015- July 2020" />
        </div>
        <Text content="Software Developer" fontSize="15px" />
        <div className={Styles.projectsInfo}>
          <ul>
            <li>
              <Text
                content="Project Title:"
                fontSize="13px"
                fontWeight="bold"
              >
                <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.Repellendus a,
                </span>
              </Text>
            </li>
            <li>
              <Text
                content="Project Title:"
                fontSize="13px"
                fontWeight="bold"
              >
                <span style={{ fontSize: '13px', fontWeight: 'lighter' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.Repellendus a, consectetur adipisicing
                  elit.Repellendus a,
                </span>
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/** Languages */}
    <div className={Styles.languages}>
      <div className={Styles.companyHeading}>
        <h3>Languages</h3>
      </div>
      <div className={Styles.languageItems}>
        <div>
          <p>English</p>
          <small>Proficient</small>
        </div>
        <div>
          <p>Spanis</p>
          <small>Expert</small>
        </div>
      </div>
    </div>
  </div>
);

export default Template1;
