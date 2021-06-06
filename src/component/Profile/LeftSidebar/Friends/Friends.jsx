import React, { useEffect } from 'react'
import styles from './Friends.module.scss'
import avaImg from './../../../../common/icons/avatar.svg'

const Friends = (props) => {

  useEffect(() => {
    props.getFriends(props.currentPage, 5, true)
  }, [])

    const friend = props.users.map(el => <li className={styles.friend}>
        <a href={`profile/${el.userId}`}>
          <img src={ el.photos.small ? el.photos.small : avaImg } alt="" />
          {el.name}
        </a>
        {el.followed 
          ? <button className={styles.unfollow} onClick={() => props.setFollow(el.id, false)}>Unfollow</button>
          : <button className={styles.follow} onClick={() => props.setFollow(el.id, true)}>Follow</button>}
      </li>)

    return (
      <div className={styles.friends}>
        <h3>Friends</h3>
        <ul>
          { friend }
        </ul>
      </div>
    )
  }

  export default Friends