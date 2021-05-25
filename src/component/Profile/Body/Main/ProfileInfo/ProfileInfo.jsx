import React from 'react'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
  return (
    <div className={styles.profileInfo}>
        <div className={styles.name}>Full Name</div>
        <div className={styles.status}>Status</div>
      </div>
  )
}

export default ProfileInfo