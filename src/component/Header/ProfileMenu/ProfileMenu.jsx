import React from 'react'
import styles from './ProfileMenu.module.scss'
import avatar from './../../../common/images/user-pro-img.png'

const ProfileMenu = (props) => {
  return (
    <div className={styles.profileMenu}>
      <div className={styles.info}>
        <a href="#">
          <img src={avatar} alt="" />
          <h3>Full Name</h3>
        </a>
      </div>
      <div className={styles.menu}>
        <div className={styles.container}>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileMenu