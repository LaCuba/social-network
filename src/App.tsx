import React from "react"
import Header from "./component/Header/Header"
import styles from "./App.module.scss"
import Music from "./component/Music/Music"
import { initialize } from "./redux/thunk/app"
import "normalize.css"
import { Provider, useDispatch, useSelector } from "react-redux"
import { Route, withRouter } from "react-router"
import { HashRouter } from "react-router-dom"
import store from "./redux/store"
import { useEffect } from "react"
import { Suspense } from "react"
import SettingsContainer from "./component/Settings/SettingsContainer"
import Users from "./component/Users/Users"
import * as selectors from "./redux/selectors/selectors"
import Messages from "./component/Messages/Messages"
import Login from "./component/Login/Login"

const ProfileContainer = React.lazy(
  () => import("./component/Profile/ProfileContainer")
)

const App = () => {
  const initialized = useSelector(selectors.app.initialized)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!initialized) {
      dispatch(initialize())
    }
  }, [initialized])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Route path="/login" render={() => <Login />} />
        <Route path="/settings" render={() => <SettingsContainer />} />
        <Route
          path="/profile/:userId?"
          render={() => (
            <Suspense fallback={<div>Loading... Profile </div>}>
              <ProfileContainer />
            </Suspense>
          )}
        />
        <Route path="/messages" render={() => <Messages />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <Users />} />
      </div>
    </div>
  )
}

const AppContainer = withRouter(App)

const SocialNetwork = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SocialNetwork
