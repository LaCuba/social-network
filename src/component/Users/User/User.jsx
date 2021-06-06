import React from 'react'
import styles from './User.module.scss'
import avatarImg from './../../../common/icons/avatar.svg'

const User = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={props.photo ? props.photo : avatarImg} alt="" />
        </div>
        <div className={styles.name}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.status}>
          <h4>{props.status}</h4>
        </div>
        <div className={props.followed ? styles.unfollow : styles.follow}>
          {props.followed 
          ? <button onClick={() => props.setFollow(props.id, false)}>Unfollow</button>
          : <button onClick={() => props.setFollow(props.id, true)}>Follow</button>}
        </div>
      </div>
      <div className={styles.viewProfile}>
        <a href={"/profile/" + props.id}>
          View Profile
        </a>
      </div>
    </div>
  )
}

export default User