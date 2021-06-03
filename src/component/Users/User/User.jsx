import React, { useState } from 'react'
import styles from './User.module.scss'
import avatarImg from './../../../common/icons/avatar.svg'

const User = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={avatarImg} alt="" />
        </div>
        <div className={styles.name}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.status}>
          <h4>{props.status}</h4>
        </div>
        <div className={props.followed ? styles.follow : styles.unfollow}>
          {props.followed 
          ? <button onClick={() => props.addFollowed(props.id ,false)}>Follow</button> 
          : <button onClick={() => props.addFollowed(props.id ,true)}>Unfollow</button>}
        </div>
      </div>
      <div className={styles.viewProfile}>
        <a href={"#" + props.id}>
          View Profile
          </a>
      </div>
    </div>
  )
}

export default User