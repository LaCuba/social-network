import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import Music from './component/Music/Music';
import Users from './component/Users/Users';
import 'normalize.css'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.container}>
          <Header />
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/messages' render={ () => <Messages />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/users' render={ () => <Users />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
