import React, {useState} from 'react';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    const [isNvigationopen, setIsNavigationOpen] = useState(false)

    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            {isNvigationopen ? <Navigation/> :
                <button className="navButton" onClick={() => setIsNavigationOpen(!isNvigationopen)}>Open nav</button>}
            {/*<Profile />*/}

            <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
            </Routes>
        </div>
       </BrowserRouter>
    );
}

export default App;
