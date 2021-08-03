import { PhotosType } from "../profile/profile"

export type User = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}
