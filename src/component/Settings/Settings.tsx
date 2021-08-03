import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm"
import styles from "./Settings.module.scss"
import * as selectors from "./../../redux/selectors/selectors"

const Settings = () => {
  const isAuth = useSelector(selectors.settings.isAuth)

  if (!isAuth) {
    return <Redirect to="/login" />
  }

  return (
    <div className={styles.settings}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Edit your info</h3>
        </div>
        <div className={styles.profileDataForm}>
          <ProfileDataForm />
        </div>
      </div>
    </div>
  )
}

export default Settings
