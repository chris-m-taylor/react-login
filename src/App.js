import React from 'react';
import Login from './Login';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login>
        <Content />
      </Login>
    </div>
  );
}

export default App;
