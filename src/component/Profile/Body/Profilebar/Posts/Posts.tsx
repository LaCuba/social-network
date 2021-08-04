import React from "react"
import styles from "./Posts.module.scss"
import PostCreator from "./PostCreator/PostCreator"
import Post from "./Post/Post"
import { useSelector } from "react-redux"
import * as selectors from "./../../../../../redux/selectors/selectors"

const Posts = () => {
  const posts = useSelector(selectors.profile.posts)

  return (
    <div className={styles.posts}>
      <PostCreator />
      {posts.map((el) => (
        <Post
          key={el.id}
          time={el.time}
          body={el.body}
          likes={el.likes}
          views={el.views}
        />
      ))}
    </div>
  )
}

export default Posts
