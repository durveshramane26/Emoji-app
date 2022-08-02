import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  function emojiInputHandler(event) {}
  return (
    <div className="App">
      <h1> Inside out </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{}</h2>
    </div>
  );
}

export default App;
