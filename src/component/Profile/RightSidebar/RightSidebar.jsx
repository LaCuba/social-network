import React from 'react'
import styles from './RightSidebar.module.scss'
import playImg from './../../../common/icons/play.svg'

const RightSidebar = (props) => {

  return (
    <div className={styles.rightSideBar}>
      <div className={styles.music}>
        <div className={styles.sound}>
          <input type="button" className={styles.playSound} value="Play" onClick={() => { }} id="play" />
          <h3>Music name</h3>
          <label htmlFor="play">
            <img src={playImg} alt="" />
          </label>
          <input type="range" />
        </div>
        <div className={styles.sound}>
          <input type="button" className={styles.playSound} value="Play" onClick={() => { }} id="play" />
          <h3>Music name</h3>
          <label htmlFor="play">
            <img src={playImg} alt="" />
          </label>
          <input type="range" />
        </div>
        <div className={styles.sound}>
          <input type="button" className={styles.playSound} value="Play" onClick={() => { }} id="play" />
          <h3>Music name</h3>
          <label htmlFor="play">
            <img src={playImg} alt="" />
          </label>
          <input type="range" />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar