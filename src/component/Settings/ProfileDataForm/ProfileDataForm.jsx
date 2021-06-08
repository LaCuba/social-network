import { Field, Form, Formik } from 'formik'
import React from 'react'
import styles from './ProfileDataForm.module.scss'

const ProfileDataForm = (props) => {
  return (
    <div className={styles.profileDataForm}>
      <Formik 
        initialValues={{
          fullName: '',
          lookingForAJob: false,
          lookingForAJobDescription: '',
          aboutMe: '',
          contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
          }
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        >
        <Form className={styles.form}>
          <label htmlFor="fullName">Full Name</label>
          <Field className={styles.input} id="fullName" name="fullName" placeholder="Full Name" />
          <label htmlFor="lookingForAJob">Looking for a job</label>
          <Field className={styles.input} id="lookingForAJob" name="lookingForAJob" type="checkbox" />
          <label htmlFor="lookingForAJobDescription">My proffessionals skills</label>
          <Field className={styles.input} id="lookingForAJobDescription" name="lookingForAJobDescription" 
            placeholder="My proffessionals skills" />
          <label htmlFor="aboutMe">About me</label>
          <Field className={styles.input} id="aboutMe" name="aboutMe" placeholder="About me" />

          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ProfileDataForm