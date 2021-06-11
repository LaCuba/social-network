import React from 'react'
import styles from './ProfileData.module.scss'

const ProfileData = (props) => {
  return (
    <div className={styles.profileInfo}>
        <div className={styles.name}>{props.profile.fullName}</div>
        <div className={styles.status}>{props.status}</div>
      </div>
  )
}

export default ProfileData