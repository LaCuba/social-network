import { Field, Form, Formik } from "formik"
import React from "react"
import { Redirect } from "react-router"
import styles from "./Login.module.scss"
import refreshImg from "./../../common/icons/refresh.svg"
import { useDispatch, useSelector } from "react-redux"
import * as selectors from "./../../redux/selectors/selectors"
import { getCaptcha, loginAuth } from "../../redux/thunk/auth"

const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectors.auth.isAuth)
  const error = useSelector(selectors.auth.error)
  const captcha = useSelector(selectors.auth.captcha)

  if (isAuth) {
    return <Redirect to="/profile" />
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
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values) => {
          dispatch(loginAuth(values))
        }}
      >
        <Form className={styles.form}>
          <h3>Sign up</h3>
          <Field
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Field
            className={styles.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className={styles.option}>
            <div className={styles.rememberMe}>
              <Field
                className={styles.checkbox}
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className={styles.error}>{error && <span>{error}</span>}</div>
          </div>
          {captcha && <img className={styles.captchaImg} src={captcha} />}
          {captcha && (
            <div className={styles.captchaInput}>
              <Field
                id="captcha"
                name="captcha"
                type="captcha"
                placeholder="captcha"
              />
              <img src={refreshImg} onClick={() => dispatch(getCaptcha())} />
            </div>
          )}
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
