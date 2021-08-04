import React from "react"
import { useSelector } from "react-redux"
import styles from "./ProfileInfo.module.scss"
import * as selectors from "./../../../../../redux/selectors/selectors"

const ProfileInfo = () => {
  const profile = useSelector(selectors.profile.profile)

  if (!profile) {
    return <div>Error</div>
  }

  return (
    <div className={styles.profileInfo}>
      <div className={styles.container}>
        <div>
          <b>About me:</b>
          <p>{profile.aboutMe}</p>
        </div>
        <div>
          <b>Looking for a job:</b>
          <p>{profile.lookingForAJob ? "Yes" : "No"}</p>
        </div>
        {profile.lookingForAJob && profile.lookingForAJobDescription && (
          <div>
            <b>My proffessionals skills:</b>
            <p>{profile.lookingForAJobDescription}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileInfo
