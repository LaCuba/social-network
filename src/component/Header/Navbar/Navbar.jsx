import React from 'react'
import styles from './Navbar.module.scss'
import profile from './../../../common/icons/profile.png'
import messages from './../../../common/icons/messages.png'
import music from './../../../common/icons/music.png'
import users from './../../../common/icons/users.png'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navUl}>
        <li className={styles.navItem}>
          <NavLink to="/profile" activeClassName={styles.activeLink}>
            <span className={styles.icon}>
              <img src={profile} alt="" />
            </span>
                Profile
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/messages" activeClassName={styles.activeLink}>
            <span className={styles.icon}>
              <img src={messages} alt="" />
            </span>
                Messages
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/music" activeClassName={styles.activeLink}>
            <span className={styles.icon}>
              <img src={music} alt="" />
            </span>
            Music
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/users" activeClassName={styles.activeLink}>
            <span className={styles.icon}>
              <img src={users} alt="" />
            </span>
                Users
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar