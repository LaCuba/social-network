import React from 'react'
import styles from './Avatar.module.scss'
import avaIcon from './../../../../common/icons/avatar.svg'

const Avatar = (props) => {

  return (
    <div className={styles.avaProfile}>
      <img src={ props.photo.small ? props.photo.small : avaIcon} alt="" />
      <div className={styles.imageBtn}>
        <input type="file" name="avatar" id="file" />
        <label htmlFor="file">Change Photo</label>
      </div>
    </div>
  )
}

export default Avatar