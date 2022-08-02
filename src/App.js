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

var emojiWeKnow = Object.keys(emojiDictionary);

function App() {

  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if(meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setmeaning(meaning);

  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside out </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>

      <h3> emojis we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style = {{ fontSize: "2em", padding: "0.5rem", cursor: "pointer" }}
            key = {emoji}
            >
            {emoji}
          </span>

        )
      })}
    </div>
  );
}

export default App;
