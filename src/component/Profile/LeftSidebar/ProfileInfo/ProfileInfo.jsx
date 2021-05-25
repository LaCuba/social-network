import React from 'react'
import styles from './ProfileInfo.module.scss'
import userProfileImage from './../../../../common/images/user-pro-img.png'

const ProfileInfo = (props) => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.avaProfile}>
        <img src={userProfileImage} alt="" />
        <div className={styles.imageBtn}>
          <input type="file" name="avatar" id="file" />
          <label htmlFor="file">Change Photo</label>
        </div>
      </div>
      <div>
        Status
      </div>
    </div>
  )
}

export default ProfileInfo