import React from 'react'
import styles from './ProfileInfo.module.scss'
import userProfileImage from './../../../../common/images/user-pro-img.png'
import youtube from './../../../../common/icons/youtube.svg'
import instagram from './../../../../common/icons/instagram.svg'
import vk from './../../../../common/icons/vk.svg'
import github from './../../../../common/icons/github.svg'
import website from './../../../../common/icons/website.svg'
import facebook from './../../../../common/icons/facebook.svg'
import twitter from './../../../../common/icons/twitter.svg'

const ProfileInfo = (props) => {

  // let contactsArray = {
  //   github: "http://github.com/",
  //   vk: "http://vk.com/",
  //   facebook: "http://facebook.com/",
  //   instagram: "http://instagram.com/"
  // }

  // let contactsIcons = [
  //   github,
  //   vk,
  //   facebook,
  //   instagram,
  //   twitter,
  //   website,
  //   youtube,
  //   website    
  // ]

  // let contact = Object.keys(contactsArray).map(key => <li className={styles.contact}>
  //   <a href={contactsArray[key]}>
  //     <img src={key} alt="" />
  //     {contactsArray[key]}
  //   </a>
  //   </li>)

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
          <li className={styles.contact}>
            <a href="http://github.com/">
              <img src={github} alt="" />
              http://github.com/
            </a>
          </li>
          <li className={styles.contact}>
            <a href="http://vk.com/">
              <img src={vk} alt="" />
              http://vk.com/
            </a>
          </li>
          <li className={styles.contact}>
            <a href="http://facebook.com/">
              <img src={facebook} alt="" />
              http://facebook.com/
            </a>
          </li>
          <li className={styles.contact}>
            <a href="http://instagram.com/">
              <img src={instagram} alt="" />
              http://instagram.com/
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo