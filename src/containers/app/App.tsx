import React from 'react';
import AnywayMap from '../map/Map';
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.mainApp}>
      <AnywayMap />
    </div>
  );
}

export default App;
