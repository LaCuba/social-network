import { Field, Form, Formik } from 'formik'
import React from 'react'
import styles from './ProfileDataForm.module.scss'

const ProfileDataForm = (props) => {
  return (
    <div className={styles.profileDataForm}>
      <Formik 
        initialValues={ props.profile }
        onSubmit={(values) => {
          debugger
          props.setProfileInfo(values)
        }}
        >
        <Form className={styles.form}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field className={styles.input} id="fullName" name="fullName" placeholder="Full Name" />
          </div>
          <div>
            <label htmlFor="lookingForAJob">Looking for a job</label>
            <Field className={styles.input} id="lookingForAJob" name="lookingForAJob" type="checkbox" />
          </div>
          <div>
            <label htmlFor="lookingForAJobDescription">My proffessionals skills</label>
            <Field className={styles.input} id="lookingForAJobDescription" name="lookingForAJobDescription" 
              placeholder="My proffessionals skills" />
          </div>
          <div>
            <label htmlFor="aboutMe">About me</label>
            <Field className={styles.input} id="aboutMe" name="aboutMe" placeholder="About me" />
          </div>
          {Object.keys(props.profile.contacts)
            .map(key => <div>
              <label htmlFor={"contacts." + key}>{key}</label>
              <Field className={styles.input} id={"contacts." + key} name={"contacts." + key} placeholder={key} />
            </div>)}
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ProfileDataForm