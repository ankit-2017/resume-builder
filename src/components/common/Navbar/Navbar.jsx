import { Grid, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Logo from 'assets/images/githubLogo2.png';
import Styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useHistory();
  return (
    <div className={Styles.mainContainer}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <div className={Styles.leftSection}>
            <img src={Logo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={Styles.rightSection}>
            <ul>
              <li>
                <Button variant="outlined" onClick={() => router.goBack()}>Back</Button>
              </li>
              <li>
                <Button variant="text">Resume Templates</Button>
              </li>
              <li>
                <Button variant="text">ENGLISH</Button>
              </li>
              <li>
                <Button variant="outlined">Login</Button>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
