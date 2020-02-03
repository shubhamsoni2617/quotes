import React from 'react';
import classes from '../../App.module.css';
const Header = () => {
  return (
    <header className={classes.mainHead}>
      <div className={classes.logo}>
        <a href='/' className={classes.logoLink}>
          filmSeer
        </a>
      </div>
      <nav className={classes.navMain}>
        <ul className={classes.navItems}>
          <li className={classes.navItem}>
            <a href='/'>
              <h3>Home</h3>
            </a>
          </li>
          <li className={classes.navItem}>
            <a href='/'>
              <h3>DashBoard</h3>
            </a>
          </li>
          <li className={`${classes.navItem} ${classes.navLink}`}>
            <a href='/'>
              <h3>About</h3>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
