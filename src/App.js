import React from "react"
import Header from "./component/Header/Header"
import styles from "./App.module.scss"
import Music from "./component/Music/Music"
import { initialize } from "./redux/thunk/app"
import "normalize.css"
import { connect, Provider } from "react-redux"
import { Route, withRouter } from "react-router"
import { HashRouter } from "react-router-dom"
import store from "./redux/store"
import MessagesContainer from "./component/Messages/MessagesContainer"
import LoginContainer from "./component/Login/LoginContainer"
import { compose } from "redux"
import { useEffect } from "react"
import { Suspense } from "react"
import SettingsContainer from "./component/Settings/SettingsContainer"
import Users from "./component/Users/Users"

const ProfileContainer = React.lazy(() =>
  import("./component/Profile/ProfileContainer")
)

const App = ({ ...props }) => {
  useEffect(() => {
    if (!props.initialized) {
      props.initialize()
    }
  }, [props.initialized])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/settings" render={() => <SettingsContainer />} />
        <Route
          path="/profile/:userId?"
          render={() => (
            <Suspense fallback={<div>Loading... Profile </div>}>
              <ProfileContainer />
            </Suspense>
          )}
        />
        <Route path="/messages" render={() => <MessagesContainer />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <Users />} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    userId: state.auth.id,
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App)

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
