import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';
import Music from './component/Music/Music';
import Users from './component/Users/Users';
import 'normalize.css'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';
import MessagesContainer from './component/Messages/MessagesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.app}>
          <div className={styles.container}>
            <Header />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <Users />} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
