import React, { useRef } from "react"
import styles from "./Avatar.module.scss"
import avaIcon from "./../../../../../common/icons/avatar.svg"
import { PhotosType } from "../../../../../types/profile/profile"
import { uploadPhoto } from "../../../../../redux/thunk/profile"
import { useDispatch } from "react-redux"

type Props = {
  photos: PhotosType
  isOwner: boolean
}

const Avatar = ({ photos, isOwner }: Props) => {
  const dispatch = useDispatch()
  const imageRef = useRef<HTMLInputElement>(null)

  const showOpenFileDialog = () => {
    if (imageRef && imageRef.current) {
      imageRef.current.click()
    }
  }

  const onHandleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (!files) {
      return
    }
    dispatch(uploadPhoto(files[0]))
  }

  return (
    <div className={styles.avaProfile}>
      <img src={photos.small ? photos.small : avaIcon} alt="avatar" />
      {isOwner && (
        <div className={styles.imageBtn}>
          <input
            type="file"
            ref={imageRef}
            id="file"
            onChange={onHandleFileInput}
            accept="image/png, image/gif, image/jpeg"
          />
          <label onClick={showOpenFileDialog}>Change Photo</label>
        </div>
      )}
    </div>
  )
}

export default Avatar
