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

  const contact = Object.keys(props.contacts)
    .filter(key => props.contacts[key] != null)
    .map(key => <li className={styles.contact}>
      <a href={props.contacts[key] ? props.contacts[key] : "#"}>
        <img src={website} alt="" />
        {props.contacts[key] ? props.contacts[key] : "Я еще не завел адрес"}
      </a>
    </li>)

  return (
    <div className={styles.contacts}>
      <ul>
        {contact}
      </ul>
    </div>
  )
}

export default Contacts