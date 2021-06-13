import React, { useEffect } from 'react'
import styles from './Users.module.scss'
import User from './User/User'
import Paginator from '../Utils/Paginator'

const Users = (props) => {

  useEffect(() => {
    props.getUsers(props.currentPage, props.countUsersOnPage)
  }, [])
  
  const pageClick = (currentPage) => {
    props.getUsers(currentPage, props.countUsersOnPage)
  }

  const user = props.usersList.map(el => <User key={el.id} id={el.id} name={el.name}
    status={el.status} followed={el.followed} photo={el.photos.small} setFollow={props.setFollow} />)

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.usersList}>
        { user }
      </div>
      <div className={styles.moreUsers}>
        <Paginator countItems={props.totalCountUsers} countItemsOnPage={props.countUsersOnPage} 
          currentPage={props.currentPage} pageClick={pageClick} portionSize={5}/>
      </div>
    </div>
  )
}

export default Users