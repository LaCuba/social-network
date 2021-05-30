import React from 'react'
import styles from './Header.module.scss'
import logo from './../../common/icons/logo.png'
import Navbar from './Navbar/Navbar'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
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