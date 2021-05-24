import React from 'react'
import styles from './MainPage.module.scss'
import coverImg from './../../common/images/cover-img.jpeg'

const MainPage = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.cover}>
        <div className={styles.coverData}>
          <img src={coverImg} alt="" />
          <div className={styles.addPicCover}>
            <a href="#" className={styles.coverBtn}>Change Image</a>
          </div>
        </div>
      </div>
      <div className={styles.mainSectionData}>
        <div className={styles.leftSideBar}>
          <div className={styles.userProfile}>
            User Profile
            </div>
          <div className={styles.suggetions}>
            Suggetions random users
            </div>
        </div>
        <div className={styles.mainContent}>
          Posts
          </div>
        <div className={styles.rightSideBar}>
          <div className={styles.music}>
            Music
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage