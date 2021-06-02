import React, { useState } from 'react'
import styles from './Users.module.scss'
import avatarImg from './../../common/icons/avatar.svg'

const Users = (props) => {

  const [selector, setSelector] = useState(true)

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        <h2>Users</h2>
      </div>
      <div className={styles.usersList}>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="" />
            </div>
            <div className={styles.name}>
              <h3>Full Name</h3>
              </div>
            <div className={styles.status}>
              <h4>Status</h4>
              </div>
            <div className={selector ? styles.follow : styles.unfollow}>
              { selector ? <a onClick={ () => setSelector(false)}>Follow</a> :
              <a onClick={() => setSelector(true)}>Unfollow</a> }
            </div>
          </div>
          <div className={styles.viewProfile}>
            <a href="#">
              View Profile
            </a>
          </div>
        </div>
      </div>
      <div className={styles.moreUsers}>
        <button>View more</button>
      </div>
    </div>
  )
}

export default Users