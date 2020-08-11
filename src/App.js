import React from 'react';
import Login from './Login';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Login Page</h1>
      <Login className="login">
        <Content />
      </Login>
    </div>
  );
}

export default App;
