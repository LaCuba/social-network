import React, { useState } from 'react'
import styles from './Paginator.module.scss'

const Paginator = ({ countItems, countItemsOnPage, currentPage, pageClick, portionSize }) => {

  const pagesCount = Math.ceil(countItems / countItemsOnPage)

  const pages = []

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.container}>
      <button disabled={portionNumber <= 1} className={styles.prevBtn} 
        onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
        <div className={styles.page}>
          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
              return <span className={currentPage === p && styles.currentPage}
                onClick={e => pageClick(p)}>{p}</span>
            })}
        </div>
        <button disabled={portionCount <= portionNumber} className={styles.nextBtn}
          onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
    </div>
  )
}

export default Paginator