import Header from './component/Header/Header';
import MainPage from './component/ProfilePage/ProfilePage';
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
