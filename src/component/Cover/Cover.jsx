import React from 'react'
import coverImg from './../../common/images/cover-img.jpeg'
import styles from './Cover.module.scss'

const Cover = (props) => {
  return (
    <div className={styles.cover}>
      <div className={styles.coverData}>
        <img src={coverImg} alt="" />
        <div className={styles.addPicCover}>
          <a href="#" className={styles.coverBtn}>Change Image</a>
        </div>
      </div>
    </div>
  )
}

export default Cover