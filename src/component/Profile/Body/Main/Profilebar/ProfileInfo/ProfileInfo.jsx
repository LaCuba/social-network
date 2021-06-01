import React from 'react'
import styles from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {

  return (
    <div className={styles.profileInfo}>
      <div className={styles.container}>
        <div>
          <b>Date of Birth:</b>
          <p>21.03.2020</p>
        </div>
        <div>
          <b>Location:</b>
          <p>Moscow</p>
        </div>
        <div>
          <b>About me:</b>
          <p>I'm a man</p>
        </div>
        <div>
          <b>Looking for a job:</b>
          <p>Yes</p>
        </div>
        <div>
          <b>My proffessionals skills:</b>
          <p>I know html css and react!</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo