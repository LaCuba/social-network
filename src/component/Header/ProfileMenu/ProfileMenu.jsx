import React from 'react'
import styles from './ProfileMenu.module.scss'
import avatarImg from './../../../common/images/user-pro-img.png'
import { NavLink } from 'react-router-dom'

const ProfileMenu = (props) => {
  return (
    <div className={styles.profileMenu}>
      { props.isAuth && props.profile
        && <div className={styles.container}>
            <div className={styles.info}>
              <a href="#">
                <img src={props.profile.photos.small ? props.profile.photos.small : avatarImg} alt="" />
                <h3>{props.profile.fullName}</h3>
              </a>
            </div>
            <div className={styles.menu}>
              <div className={styles.btn}>
                <NavLink to="/settings">Settings</NavLink>
              </div>
              <div className={styles.btn}>
                <a onClick={() => props.logoutAuth()}>Logout</a>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfileMenu