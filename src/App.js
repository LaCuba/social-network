import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import Music from './component/Music/Music';
import Users from './component/Users/Users';
import 'normalize.css'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.app}>
          <div className={styles.container}>
            <Header />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/messages' render={() => <Messages />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <Users />} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
