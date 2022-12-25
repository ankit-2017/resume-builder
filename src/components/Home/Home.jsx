import { useHistory } from 'react-router-dom';
// import {  } from 'react-redux';
// import { getPublicIp } from 'components/Home/Home.slice';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@mui/material';
import Navbar from 'components/common/Navbar';
import Styles from './Home.module.scss';

const Home = () => {
  const router = useHistory();
  return (
    <div>
      <Navbar />
      <div className={Styles.mainBody}>
        <div className={Styles.innerDivContainer}>
          <div className={Styles.introduction}>
            <h1>
              The Online Free
              {' '}
              <span>Resume Builder</span>
              {' '}
              with ResumeX.
            </h1>
            <p>
              A quick and easy way to create your professional resume.
              Select your most suitable template, customize the details as
              per your liking and download in different format
              (pdf, png, jpg etc.) without any cost as many times you want.
            </p>
          </div>
          <div>
            <h2>
              Create your
              {' '}
              <span>free</span>
              {' '}
              resume in simple steps.
            </h2>
            <ul>
              <li>
                <div>
                  <CheckCircleRoundedIcon fontSize="medium" sx={{ color: '#8a2be2' }} />
                  {' '}
                  <span>Select right template from our collection.</span>
                </div>
              </li>
              <li>
                <div>
                  <CheckCircleRoundedIcon fontSize="medium" sx={{ color: '#8a2be2' }} />
                  {' '}
                  <span>Fill yours details.</span>
                </div>
              </li>
              <li>
                <div>
                  <CheckCircleRoundedIcon fontSize="medium" sx={{ color: '#8a2be2' }} />
                  {' '}
                  <span>Download resume.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.buttonWrapper}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => router.push('/template')}
            endIcon={<KeyboardDoubleArrowRightIcon fontSize="large" />}
          >
            Select Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
