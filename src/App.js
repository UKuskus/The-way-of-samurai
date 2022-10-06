import React, { useState } from 'react';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import './App.css';

const App = () => {
  const [isNvigationopen, setIsNavigationOpen] = useState(false)

  return (
    <div className="App-wrapper">
      <Header />
      {isNvigationopen ? <Navigation /> : <button className="navButton" onClick={() => setIsNavigationOpen(!isNvigationopen)}>Open nav</button>}
      {/*<Profile />*/}
      <div>
        <Dialogs/>
      </div>


    </div>

  );
}

export default App;
