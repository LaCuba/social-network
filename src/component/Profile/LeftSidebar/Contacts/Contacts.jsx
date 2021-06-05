import React from 'react'
import styles from './Contacts.module.scss'
import userProfileImage from './../../../../common/images/user-pro-img.png'
import youtube from './../../../../common/icons/youtube.svg'
import instagram from './../../../../common/icons/instagram.svg'
import vk from './../../../../common/icons/vk.svg'
import github from './../../../../common/icons/github.svg'
import website from './../../../../common/icons/website.svg'
import facebook from './../../../../common/icons/facebook.svg'
import twitter from './../../../../common/icons/twitter.svg'

const Contacts = (props) => {

  let contact = Object.keys(props.contacts).map(key => <li className={styles.contact}>
    <a href={props.contacts[key] ? props.contacts[key] : "#"}>
      <img src={key} alt="" />
      {props.contacts[key] ? props.contacts[key] : "Я еще не завел адрес"}
    </a>
    </li>)

  return (
    <div className={styles.userProfile}>
      <div className={styles.avaProfile}>
        <img src={userProfileImage} alt="" />
        <div className={styles.imageBtn}>
          <input type="file" name="avatar" id="file" />
          <label htmlFor="file">Change Photo</label>
        </div>
      </div>
      <div className={styles.contacts}>
        <ul>
          { contact }
        </ul>
      </div>
    </div>
  )
}

export default Contacts