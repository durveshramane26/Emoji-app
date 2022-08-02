import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "✔": "correct",
  "👏": "clap",
  "🙌": "high five",
  "😎": "cool"
};

function App() {

  function emojiInputHandler(event) {
    var userInput = event.target.value;

  }
  return (
    <div className="App">
      <h1> Inside out </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{}</h2>
    </div>
  );
}

export default App;
