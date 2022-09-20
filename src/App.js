import './App.css';
import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';


const App = () => {
  return (
    <div className="App-wrapper">
       <Header/>
       <Navigation/>
       <Content/>
      
    </div>
   
  );
}

export default App;
