import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Redirect } from 'react-router'
import styles from './Login.module.scss'

const Login = (props) => {

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <h3>Чтобы зайти в соц. сеть воспользуйтесь тестовым аккаунтом:</h3>
        <div>
          <b>Email: </b> <span>free@samuraijs.com</span>
        </div>
        <div>
          <b>Password: </b> <span>free</span>
        </div>
      </div>
      <Formik 
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={(values) => {
          props.loginAuth(values)
        }}
        >
          <Form className={styles.form}>
            <h3>Sign up</h3>
            <Field className={styles.input} id="email" name="email" type="email" placeholder="E-mail" />
            <Field className={styles.input} id="password" name="password" type="password" placeholder="Password" />
            <div className={styles.option}>
              <div className={styles.rememberMe}>
                <Field className={styles.checkbox} id="rememberMe" name="rememberMe" type="checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className={styles.error}>
                {props.error && <span>{props.error}</span>}
              </div>
            </div>
            <button type="submit">Login</button>
          </Form>
      </Formik>
    </div>
  )
}

export default Login