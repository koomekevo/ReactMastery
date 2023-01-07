import './App.css';

const [firstCity, secondCity] = ["Nairobi", "Mombasa", "Nakuru"];

console.log(firstCity);
console.log(secondCity);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
