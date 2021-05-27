import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      {/* <Profile /> */}
      <Messages />
    </div>
  );
}

export default App;
