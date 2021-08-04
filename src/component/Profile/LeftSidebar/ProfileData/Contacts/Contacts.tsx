import React from "react"
import styles from "./Contacts.module.scss"
import youtube from "./../../../../../common/icons/youtube.svg"
import instagram from "./../../../../../common/icons/instagram.svg"
import vk from "./../../../../../common/icons/vk.svg"
import github from "./../../../../../common/icons/github.svg"
import website from "./../../../../../common/icons/website.svg"
import facebook from "./../../../../../common/icons/facebook.svg"
import twitter from "./../../../../../common/icons/twitter.svg"

type Props = {
  contacts: Record<string, string>
}

const Contacts = ({ contacts }: Props) => {
  const icons: Record<string, string> = {
    youtube,
    instagram,
    vk,
    github,
    website,
    facebook,
    twitter,
  }

  const contact = Object.keys(contacts)
    .filter((key) => contacts[key] != null || "")
    .map((key) => (
      <li key={key} className={styles.contact}>
        <a href={contacts[key] ? contacts[key] : "#"}>
          <img src={icons[key]} alt="" />
          {contacts[key] ? contacts[key] : "Я еще не завел адрес"}
        </a>
      </li>
    ))

  return (
    <div className={styles.contacts}>
      <ul>{contact}</ul>
    </div>
  )
}

export default Contacts
