import React from "react"
import styles from "./User.module.scss"
import avatarImg from "./../../../common/icons/avatar.svg"
import { NavLink } from "react-router-dom"
import { User } from "../../../types/users/users"
import { useDispatch } from "react-redux"
import { setFollow } from "../../../redux/thunk/users"

type Props = User

const User = ({ id, name, status, followed, photos }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={photos ? photos.small : avatarImg} alt="" />
        </div>
        <div className={styles.name}>
          <h3>{name}</h3>
        </div>
        <div className={styles.status}>
          <h4>{status}</h4>
        </div>
        <div className={followed ? styles.unfollow : styles.follow}>
          {followed ? (
            <button onClick={() => dispatch(setFollow(id, false))}>
              Unfollow
            </button>
          ) : (
            <button onClick={() => dispatch(setFollow(id, true))}>
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.viewProfile}>
        <NavLink to={"/profile/" + id}>View Profile</NavLink>
      </div>
    </div>
  )
}

export default User
