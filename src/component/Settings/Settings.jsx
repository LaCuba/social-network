import React from 'react'
import styles from './Settings.module.scss'

const Settings = (props) => {
  return (
    <div className={styles.settings}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>
            Redact profile info
          </h3>
        </div>
        <div className={styles.profileDataForm}>
          <div>Forms</div>
        </div>
      </div>
    </div>
  )
}

export default Settings