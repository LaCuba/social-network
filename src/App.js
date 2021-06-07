import Header from './component/Header/Header';
import styles from './App.module.scss'
import ProfileContainer from './component/Profile/ProfileContainer';
import Music from './component/Music/Music';
import UsersContainer from './component/Users/UsersContainer';
import 'normalize.css'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';
import MessagesContainer from './component/Messages/MessagesContainer';
import LoginContainer from './component/Login/LoginContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
