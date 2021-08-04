import React from "react"
import coverImg from "./../../../common/images/cover-img.jpeg"
import styles from "./Cover.module.scss"

const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.coverData}>
        <img src={coverImg} alt="" />
        <div className={styles.addPicCover}>
          <input type="file" name="avatar" id="file" />
          <label htmlFor="file">Change Photo</label>
        </div>
      </div>
    </div>
  )
}

export default Cover
