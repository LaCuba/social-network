import React from 'react'
import styles from './Dialog.module.scss'
import MessageHeader from './MessageHeader/MessageHeader'
import Message from './Message/Message'

const Dialog = (props) => {
  return (
  <div>
    <MessageHeader />
    <div className={styles.messagesArea}>
      <Message ownerMessage={true} bodyMessage="Text message about my life" messageTime="21.03.2020" />
      <Message ownerMessage={false} bodyMessage="Text message about my life" messageTime="21.03.2020" />
      <Message ownerMessage={true} bodyMessage="Text message about myfdgsmadsnfkjlasdlkf fasdfbjsadhfkjhasdkjfhjkasdhfjkhsadjkfhsakdjfhjksadhfjksadhfskjadfsdafasdfsadfsadfasfsdafsdadfsdafsadfsafasdfjlsdaknfkljasdnfjklsadnfljksadnfljksdanf life" messageTime="21.03.2020" />
      <Message ownerMessage={false} bodyMessage="Text message about my life" messageTime="21.03.2020" />
      <Message ownerMessage={true} bodyMessage="Text message about my life" messageTime="21.03.2020" />
      <Message ownerMessage={false} bodyMessage="Text message about my life" messageTime="21.03.2020" />
    </div>
  </div>
  )
}

export default Dialog