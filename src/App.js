import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import 'normalize.css'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        {/* <Profile /> */}
        <Messages />
      </div>
    </div>
  );
}

export default App;
