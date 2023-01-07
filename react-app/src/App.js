import './App.css';

const cities = ["Nairobi", "Mombasa", "Nakuru"];

console.log(cities[0]);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
