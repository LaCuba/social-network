import React from 'react'
import styles from './Header.module.scss'
import logo from './../../common/icons/logo.png'
import profile from './../../common/icons/profile.png'
import messages from './../../common/icons/messages.png'
import music from './../../common/icons/music.png'
import users from './../../common/icons/users.png'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navUl}>
            <li className={styles.navItem}>
              <a href="#">
                <span className={styles.icon}>
                  <img src={profile} alt="" />
                </span>
            Profile
            </a>
            </li>
            <li className={styles.navItem}>
              <a href="#">
                <span className={styles.icon}>
                  <img src={messages} alt="" />
                </span>
            Messages
            </a>
            </li>
            <li className={styles.navItem}>
              <a href="#">
                <span className={styles.icon}>
                  <img src={music} alt="" />
                </span>
            Music
            </a>
            </li>
            <li className={styles.navItem}>
              <a href="#">
                <span className={styles.icon}>
                  <img src={users} alt="" />
                </span>
            Users
            </a>
            </li>
          </ul>
        </nav>
        <div className={styles.profileMenu}>
          <div className={styles.profileAva}>
            ava
          </div>
        profile
        </div>
      </div>
    </header>
  )
}

export default Header