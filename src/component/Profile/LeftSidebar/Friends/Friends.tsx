import React, { useEffect } from "react"
import styles from "./Friends.module.scss"
import avaImg from "./../../../../common/icons/avatar.svg"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import * as selectors from "./../../../../redux/selectors/selectors"
import { getFriends, setFollowFriends } from "../../../../redux/thunk/users"

const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(selectors.profile.friends)

  useEffect(() => {
    dispatch(getFriends(1, 5, true))
  }, [])

  const friend = friends.map((el) => (
    <li key={el.id} className={styles.friend}>
      <NavLink to={`profile/${el.id}`}>
        <img src={el.photos.small ? el.photos.small : avaImg} alt="" />
        {el.name}
      </NavLink>
      {el.followed ? (
        <button
          className={styles.unfollow}
          onClick={() => dispatch(setFollowFriends(el.id, false))}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={styles.follow}
          onClick={() => dispatch(setFollowFriends(el.id, true))}
        >
          Follow
        </button>
      )}
    </li>
  ))

  return (
    <div className={styles.friends}>
      <h3>Friends</h3>
      <ul>{friend}</ul>
    </div>
  )
}

export default Friends
