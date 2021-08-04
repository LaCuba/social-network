import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addPostCreator } from "../../../../../../redux/actions/profile"
import styles from "./PostCreator.module.scss"

const PostCreator = () => {
  const dispatch = useDispatch()
  const [post, setPost] = useState("")

  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.currentTarget.value)
  }

  const onPostCreator = () => {
    dispatch(addPostCreator(post))
    setPost("")
  }

  return (
    <div className={styles.postCreator}>
      <div className={styles.container}>
        <textarea
          onChange={onPostChange}
          placeholder="Write your post"
          value={post}
        ></textarea>
        <button onClick={onPostCreator}>Add Post</button>
      </div>
    </div>
  )
}

export default PostCreator
