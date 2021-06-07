import React from 'react'
import styles from './ProfileMenu.module.scss'
import avatar from './../../../common/images/user-pro-img.png'

const ProfileMenu = (props) => {
  return (
    <div className={styles.profileMenu}>
      { props.isAuth && props.profile
        && <div className={styles.container}>
            <div className={styles.info}>
              <a href="#">
                <img src={props.profile.photos.small} alt="" />
                <h3>{props.profile.fullName}</h3>
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