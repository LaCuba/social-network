import React, { useEffect } from 'react'
import styles from './Body.module.scss'
import Profilebar from './Profilebar/Profilebar'
import ProfileData from './ProfileData/ProfileData'

const Body = (props) => {

  return (
    <div className={styles.body}>
      <ProfileData profile={props.profile} />
      <Profilebar profile={props.profile} />
    </div>
  )
}

export default Body