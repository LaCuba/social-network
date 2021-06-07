import React from 'react'
import styles from './ProfileMenu.module.scss'
import avatar from './../../../common/images/user-pro-img.png'
import { NavLink } from 'react-router-dom'

const ProfileMenu = (props) => {
  return (
    <div className={styles.profileMenu}>
      { props.isAuth 
        && <div className={styles.container}>
            <div className={styles.info}>
              <a href="#">
                <img src={avatar} alt="" />
                <h3>Full Name</h3>
              </a>
            </div>
            <div className={styles.menu}>
              <div>
                <a onClick={() => props.logoutAuth()}>Logout</a>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfileMenu