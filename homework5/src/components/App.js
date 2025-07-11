import styles from '../styles/app.module.css';
import LoginScreen from './LoginScreen.jsx';

function App() {
  return (
    <div className={styles.appContainer}>
     <LoginScreen />
    </div>
  );
}

export default App;