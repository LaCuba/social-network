import Header from './component/Header/Header';
import styles from './App.module.scss'
import ProfileContainer from './component/Profile/ProfileContainer';
import Music from './component/Music/Music';
import UsersContainer from './component/Users/UsersContainer';
import { initialize } from './redux/AppReducer'
import { getProfile } from './redux/ProfileReducer'
import 'normalize.css'
import { connect, Provider } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';
import MessagesContainer from './component/Messages/MessagesContainer';
import LoginContainer from './component/Login/LoginContainer';
import { compose } from 'redux';
import { useEffect } from 'react';

const App = (props) => {

  useEffect(() => {
    if (!props.initialized) {
      props.initialize()
      props.getProfile(props.userId)
      return <div>Loading....App component</div>
    }
  }, [props.initialized])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    userId: state.auth.id
  }
}

const AppContainer = compose(
  withRouter, 
  connect(mapStateToProps, { initialize, getProfile }))
  (App)

const SocialNetwork = () => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
}

export default SocialNetwork;
