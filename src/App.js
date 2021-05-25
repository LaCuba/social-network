import Header from './component/Header/Header';
import styles from './App.module.scss'
import Profile from './component/Profile/Profile';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Profile />
    </div>
  );
}

export default App;
