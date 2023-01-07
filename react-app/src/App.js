import "./App.css";
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Change Emotion</button>
    </div>
  );
}

export default App;
