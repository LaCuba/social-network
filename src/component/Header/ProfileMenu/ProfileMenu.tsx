import React from "react"
import styles from "./ProfileMenu.module.scss"
import avatarImg from "./../../../common/images/user-pro-img.png"
import { NavLink, useHistory } from "react-router-dom"
import iconArray from "./../../../common/icons/arrow1.svg"
import { useDispatch, useSelector } from "react-redux"
import * as selectors from "./../../../redux/selectors/selectors"
import { logoutAuth } from "../../../redux/thunk/auth"

const ProfileMenu = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectors.auth.isAuth)
  const profile = useSelector(selectors.profile.profile)

  const history = useHistory()

  const logout = () => {
    dispatch(logoutAuth())
    history.push("/login")
  }

  return (
    <div className={styles.profileMenu}>
      {isAuth && profile && (
        <div className={styles.container}>
          <div className={styles.info}>
            <NavLink to="/profile">
              <img
                src={profile.photos.small ? profile.photos.small : avatarImg}
                alt=""
              />
              <h3>{profile.fullName}</h3>
              <div className={styles.iconMenu}>
                <img src={iconArray} alt="" />
              </div>
            </NavLink>
          </div>
          <div className={styles.menu}>
            <div className={styles.btn}>
              <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={styles.btn}>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
