import React, { useState } from 'react'
import styles from './Users.module.scss'
import User from './User/User'

const Users = (props) => {

  const [selector, setSelector] = useState(true)

  const usersList = [
    { id: 2, name: "Mahmut", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"},
    { id: 3, name: "Pavel", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"},
    { id: 4, name: "Anzor", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"},
    { id: 5, name: "Maga", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"},
    { id: 6, name: "Kolya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"},
    { id: 7, name: "Valya", status: "Ya v shoke sdkjflksdajflkjsdalffjsdkl;afjsad;fjklfa"}
  ]

  const user = usersList.map(el => <User key={el.id} name={el.name} status={el.status} id={el.id} />)

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