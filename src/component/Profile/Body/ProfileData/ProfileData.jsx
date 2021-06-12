import React from 'react'
import styles from './ProfileData.module.scss'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileData = (props) => {

  return (
    <div className={styles.profileInfo}>
        <div className={styles.name}>{props.profile.fullName}</div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
  )
}

export default ProfileData