
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Countdown from './components/Countdown';
import Currenttime from './components/Currenttime';
import './App.css';
import { Fragment } from 'react';
import Timer from './components/Timer';


function App() {
  return (
    <Fragment>
      <AppHeader/>
      <Currenttime/>
      <Timer/>
      <Countdown/>
       <AppFooter/>
    </Fragment>
    

  );
}

export default App;
