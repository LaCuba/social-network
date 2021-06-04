import React, { useEffect, useState } from 'react'
import styles from './Users.module.scss'
import User from './User/User'

const Users = (props) => {

  const [currentPage, setCurrentPage] = useState(props.currentPage)

  useEffect(() => {
    debugger
    props.getUsers(currentPage, props.countUsersOnPage)
  }, [currentPage])

  const user = props.usersList.map(el => <User key={el.id} id={el.id} name={el.name}
    status={el.status} followed={el.followed} photo={el.photos.small} addFollowed={props.addFollowed} />)

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.usersList}>
        { user }
      </div>
      <div className={styles.moreUsers}>
        <button onClick={() => setCurrentPage(currentPage+1)} >View next</button>
      </div>
    </div>
  )
}

export default Users