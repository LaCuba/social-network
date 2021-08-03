import { Field, Form, Formik } from "formik"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProfileInfo } from "../../../redux/thunk/profile"
import styles from "./ProfileDataForm.module.scss"
import * as selectors from "./../../../redux/selectors/selectors"

const ProfileDataForm = () => {
  const dispatch = useDispatch()
  const profile = useSelector(selectors.settings.profile)

  if (!profile) {
    console.log("Error: You have not profile.")
    return <div>Error</div>
  }

  return (
    <div className={styles.profileDataForm}>
      <Formik
        initialValues={profile}
        onSubmit={(values) => {
          dispatch(setProfileInfo(values))
        }}
      >
        <Form className={styles.form}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field
              className={styles.input}
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="lookingForAJob">Looking for a job</label>
            <Field
              className={styles.input}
              id="lookingForAJob"
              name="lookingForAJob"
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="lookingForAJobDescription">
              My proffessionals skills
            </label>
            <Field
              className={styles.input}
              id="lookingForAJobDescription"
              name="lookingForAJobDescription"
              placeholder="My proffessionals skills"
            />
          </div>
          <div>
            <label htmlFor="aboutMe">About me</label>
            <Field
              className={styles.input}
              id="aboutMe"
              name="aboutMe"
              placeholder="About me"
            />
          </div>
          {Object.keys(profile.contacts).map((key) => (
            <div key={key}>
              <label htmlFor={"contacts." + key}>{key}</label>
              <Field
                className={styles.input}
                id={"contacts." + key}
                name={"contacts." + key}
                placeholder={key}
              />
            </div>
          ))}
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ProfileDataForm
