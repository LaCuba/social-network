import React from 'react'
import styles from './Main.module.scss'
import Profilebar from './Profilebar/Profilebar'
import ProfileData from './ProfileData/ProfileData'

const Main = (props) => {
  return (
    <div className={styles.contentItems}>
      <ProfileData />
      <Profilebar />
    </div>
  )
}

export default Main