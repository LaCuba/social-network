import React from 'react'
import Main from './Main/Main'
import styles from './Body.module.scss'

const Body = (props) => {
  return (
    <div className={styles.body}>
      <Main />
    </div>
  )
}

export default Body