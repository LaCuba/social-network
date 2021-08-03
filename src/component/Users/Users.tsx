import React, { useEffect } from "react"
import styles from "./Users.module.scss"
import User from "./User/User"
import Paginator from "../Utils/Paginator"
import withAuthRerander from "../hoc/withAuthRerander"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/thunk/users"
import * as selectors from "./../../redux/selectors/selectors"

const Users = () => {
  const dispatch = useDispatch()
  const currentPageFromState = useSelector(selectors.users.currentPage)
  const countUsersOnPage = useSelector(selectors.users.countUsersOnPage)
  const users = useSelector(selectors.users.users)
  const totalCountUsers = useSelector(selectors.users.totalCountUsers)

  useEffect(() => {
    dispatch(getUsers(currentPageFromState, countUsersOnPage))
  }, [])

  const pageClick = (currentPage: number) => {
    dispatch(getUsers(currentPage, countUsersOnPage))
  }

  const user = users.map((el) => (
    <User
      key={el.id}
      id={el.id}
      name={el.name}
      status={el.status}
      followed={el.followed}
      photos={el.photos}
    />
  ))

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.usersList}>{user}</div>
      <div className={styles.moreUsers}>
        <Paginator
          countItems={totalCountUsers}
          countItemsOnPage={countUsersOnPage}
          currentPage={currentPageFromState}
          pageClick={pageClick}
          portionSize={5}
        />
      </div>
    </div>
  )
}

export default withAuthRerander(Users)
