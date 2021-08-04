import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateStatus } from "../../../../../redux/thunk/profile"
import styles from "./ProfileStatus.module.scss"

type Props = {
  propsStatus: string
}

const ProfileStatus = ({ propsStatus }: Props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(propsStatus)

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  const deactivateEditMode = () => {
    dispatch(updateStatus(status))
    setEditMode(false)
  }

  return (
    <div>
      {editMode ? (
        <input
          className={styles.editStatus}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
          autoFocus={true}
        />
      ) : (
        <div onDoubleClick={() => setEditMode(true)} className={styles.status}>
          {propsStatus || "Set status"}
        </div>
      )}
    </div>
  )
}

export default ProfileStatus
