import React, { useEffect } from 'react'
import styles from './Friends.module.scss'
import avaImg from './../../../../common/icons/avatar.svg'
import { NavLink } from 'react-router-dom'

const Friends = (props) => {

  useEffect(() => {
    props.getFriends(1, 5, true)
  }, [])

    const friend = props.friends.map(el => <li className={styles.friend}>
        <NavLink to={`profile/${el.id}`}>
          <img src={ el.photos.small ? el.photos.small : avaImg } alt="" />
          {el.name}
        </NavLink>
        {el.followed 
          ? <button className={styles.unfollow} onClick={() => props.setFollowFriends(el.id, false)}>Unfollow</button>
          : <button className={styles.follow} onClick={() => props.setFollowFriends(el.id, true)}>Follow</button>}
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