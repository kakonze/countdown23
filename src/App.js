
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Countdown from './components/Countdown';
import './App.css';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <AppHeader/>
      <Countdown/>
       <AppFooter/>
    </Fragment>
    

  );
}

export default App;
