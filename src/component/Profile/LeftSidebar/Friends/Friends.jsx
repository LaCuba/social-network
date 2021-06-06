import React, { useEffect } from 'react'
import styles from './Friends.module.scss'

const Friends = (props) => {

  useEffect(() => {
    props.getFriends(props.currentPage, 5, true)
  }, [])

    const friend = props.users.map(el => <li className={styles.friend}>
        <a href={`profile/${el.userId}`}>
          <img src={el.photo} alt="" />
          {el.name}
        </a>
      </li>)

    return (
      <div className={styles.friends}>
        <h3>Friends</h3>
        <ul>
          {friend}
        </ul>
      </div>
    )
  }

  export default Friends