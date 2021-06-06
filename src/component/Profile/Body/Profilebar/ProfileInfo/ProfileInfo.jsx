import React from 'react'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {

  return (
    <div className={styles.profileInfo}>
      <div className={styles.container}>
        <div>
          <b>About me:</b>
          <p>{props.profile.aboutMe}</p>
        </div>
        <div>
          <b>Looking for a job:</b>
          <p>{props.profile.lookingForAJob ? "Yes" : "No"}</p>
        </div>
        {props.profile.lookingForAJob && props.profile.lookingForAJobDescription &&
        <div>
          <b>My proffessionals skills:</b>
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>}
      </div>
    </div>
  )
}

export default ProfileInfo