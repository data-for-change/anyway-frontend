import React from 'react';
import AnywayMap from "../map/Map";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from '../about/About';
import VisionZero from '../visionZero';
import NavBar from '../navBar/NavBar';
import styles from "./App.module.css";


const App: React.FC = () => {
  return (
    <div className={styles.mainApp} dir='ltr'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <AnywayMap />
          </Route>
          <Route path='/map'>
            <AnywayMap />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/vision-zero'>
            <VisionZero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;