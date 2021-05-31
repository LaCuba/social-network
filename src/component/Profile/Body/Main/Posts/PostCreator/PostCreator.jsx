import React, { useState } from 'react'
import { addPostCreator } from '../../../../../../redux/ProfileReducer'
import styles from './PostCreator.module.scss'

const PostCreator = (props) => {

  let [post, setPost] = useState('')

  const onPostChange = (e) => {
    setPost(e.currentTarget.value)
  }

  const addPostCreator = () => {
    props.addPostCreator(post)
    setPost("")
  }

  return (
    <div className={styles.postCreator}>
      <div className={styles.container}>
        <textarea onChange={onPostChange} placeholder="Write your post" value={post}></textarea>
        <button onClick={addPostCreator}>Add Post</button>
      </div>
    </div>
  )
}

export default PostCreator