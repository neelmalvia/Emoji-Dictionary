import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face",
  "π": "Upside-Down Face",
  "π« ": "Melting Face",
  "π": "Winking Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  // function emojiInputHandler(event) {
  //   var userInput = event.target.value;
  //   var meaning = emojiDictionary[userInput];
  //   setMeaning(meaning);
  // }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // console.log(event.target.value);

    if (userInput in emojiDictionary) {
      return setMeaning(emojiDictionary[userInput]);
    } else if (userInput === "") {
      return setMeaning("");
    } else {
      return setMeaning("Not in Database.....");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="header">Emoji Dictionary</h1>
      <input placeholder="Enter a emoji" onChange={emojiInputHandler}></input>

      <div className="output">Meaning: {meaning}</div>

      <div id="emojiWeKnow">πEmojies We Knowπ</div>

      <ul>
        {emojiWeKnow.map((emoji) => {
          return (
            <li
              id="emojiIcon"
              key={emoji}
              style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// VISER = View -> Intract -> State in Event Hanndler -> Render
