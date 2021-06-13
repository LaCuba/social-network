import React, { useRef } from 'react'
import styles from './Avatar.module.scss'
import avaIcon from './../../../../../common/icons/avatar.svg'

const Avatar = (props) => {

  const imageRef = useRef()

  const showOpenFileDialog = () => {
    imageRef.current.click()
  }

  const onHandleFileInput = (e) => {
    props.uploadPhoto(e.currentTarget.files[0])
  }

  return (
    <div className={styles.avaProfile}>
      <img src={ props.photo.small ? props.photo.small : avaIcon} alt="avatar" />
      {props.isOwner &&
      <div className={styles.imageBtn}>
        <input type="file" ref={imageRef} id="file" 
          onChange={onHandleFileInput} accept="image/png, image/gif, image/jpeg" />
        <label onClick={showOpenFileDialog}>Change Photo</label>
      </div>}
    </div>
  )
}

export default Avatar