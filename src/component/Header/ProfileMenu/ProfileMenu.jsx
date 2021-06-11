import React from 'react'
import styles from './ProfileMenu.module.scss'
import avatarImg from './../../../common/images/user-pro-img.png'
import { NavLink, useHistory } from 'react-router-dom'

const ProfileMenu = (props) => {

  const history = useHistory()

  const logout = () => {
    props.logoutAuth()
    history.push('/login')
  }

  return (
    <div className={styles.profileMenu}>
      { props.isAuth && props.profile
        && <div className={styles.container}>
            <div className={styles.info}>
              <NavLink to='/profile'>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatarImg} alt="" />
                <h3>{props.profile.fullName}</h3>
              </NavLink>
            </div>
            <div className={styles.menu}>
              <div className={styles.btn}>
                <NavLink to="/settings">Settings</NavLink>
              </div>
              <div className={styles.btn}>
                <a onClick={logout}>Logout</a>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfileMenu