import React from 'react'
import styles from './ProfileData.module.scss'

const ProfileData = (props) => {
  return (
    <div className={styles.profileInfo}>
        <div className={styles.name}>Full Name</div>
        <div className={styles.status}>Status</div>
      </div>
  )
}

export default ProfileData