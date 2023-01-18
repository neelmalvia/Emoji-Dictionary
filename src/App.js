import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face"
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

      <div id="emojiWeKnow">👇Emojies We Know👇</div>

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
