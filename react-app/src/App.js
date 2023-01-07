import "./App.css";
import { useState } from "react";

const [firstCity, secondCity] = ["Nairobi", "Mombasa", "Nakuru"];

console.log(firstCity);
console.log(secondCity);

function App({ library }) {
  const what = useState();
  console.log(what);
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
