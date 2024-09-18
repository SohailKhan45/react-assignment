import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {

  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-container">
        <Main />
      </div>
    </div>
  );
};

export default App;
