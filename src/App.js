import './App.css';
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';


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
