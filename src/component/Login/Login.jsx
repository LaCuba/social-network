import { Field, Form, Formik } from 'formik'
import React from 'react'
import styles from './Login.module.scss'

const Login = (props) => {

  return (
    <div className={styles.body}>
      <Formik 
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={(values) => {
          debugger
          console.log(values)
        }}
        >
        <Form className={styles.form}>
          <h3>Sign up</h3>
          {/* <label htmlFor="email">E-mail:</label> */}
          <Field className={styles.input} id="email" name="email" type="email" placeholder="E-mail" />
          {/* <label htmlFor="password">Password:</label> */}
          <Field className={styles.input} id="password" name="password" type="password" placeholder="Password" />
          <div className={styles.rememberMe}>
            <Field className={styles.checkbox} id="rememberMe" name="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login