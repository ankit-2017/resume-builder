/* eslint-disable */
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from 'assets/images/githubLogo2.png';
import Styles from './Navbar.module.scss';

const Navbar = () => {
  const router = useHistory();
  const [navbarClass, setNavbarClass] = useState(false)
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.leftNavbar}>
          <img src={Logo} alt="logo" />
          {
            navbarClass 
            ? <CloseIcon className={Styles.menuIcon} onClick={() => setNavbarClass(false)} />
            : <MenuIcon className={Styles.menuIcon} onClick={() => setNavbarClass(true)} />
          }
          
      </div>
      <div className={ navbarClass? Styles.responsiveNavbar: Styles.rightNavbar}>
        <ul>
          <li>
            <a href="#" onClick={() => router.goBack()} >Back</a>
          </li>
          <li>
            <a href="#">Templates</a>
          </li>
          <li>
            <a href="#">Languages</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
