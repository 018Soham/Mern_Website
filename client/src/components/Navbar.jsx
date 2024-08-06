import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../store/auth';

function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <NavLink to="/">Soham Technical</NavLink>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/servise">Service</NavLink></li>
              {isLoggedIn ? (
                <li><NavLink to="/logout">Logout</NavLink></li>
              ) : (
                <>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
