import React, { useState } from 'react'
import styles from './Users.module.scss'
import User from './User/User'

const Users = (props) => {

  const [selector, setSelector] = useState(true)

  const user = props.usersList.map(el => <User key={el.id} name={el.name} status={el.status} id={el.id} />)

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.usersList}>
        { user }
      </div>
      <div className={styles.moreUsers}>
        <button>View more</button>
      </div>
    </div>
  )
}

export default Users