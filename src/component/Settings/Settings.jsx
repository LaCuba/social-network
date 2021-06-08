import React from 'react'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import styles from './Settings.module.scss'

const Settings = (props) => {
  return (
    <div className={styles.settings}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>
            Edit your info
          </h3>
        </div>
        <div className={styles.profileDataForm}>
          <ProfileDataForm />
        </div>
      </div>
    </div>
  )
}

export default Settings