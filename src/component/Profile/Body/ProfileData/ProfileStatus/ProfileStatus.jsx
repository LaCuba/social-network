import React, { useState } from 'react'
import styles from './ProfileStatus.module.scss'

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const deactivateEditMode = () => {
    props.updateStatus(status)
    setEditMode(false)
  }

  return (
    <div>
      {editMode 
      ? <input className={styles.editStatus} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus="true" />
      : <div onDoubleClick={() => setEditMode(true)} className={styles.status}>
          {props.status || "Set status"}
        </div>}
    </div>
  )
}

export default ProfileStatus