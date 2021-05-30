import React from 'react'
import styles from './Header.module.scss'
import logo from './../../common/icons/logo.png'
import Navbar from './Navbar/Navbar'
import ProfileMenu from './ProfileMenu/ProfileMenu'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
        <ProfileMenu />
      </div>
    </header>
  )
}

export default Header