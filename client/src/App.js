import './App.css';

function App() {
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" />
        <label>Age:</label>
        <input type="number" />
        <label>Country:</label>
        <input type="text" />
        <label>Position:</label>
        <input type="text" />
        <label>Wage:</label>
        <input type="text" />
        <button>Add employee</button>
      </div>
    </div>
  );
}

export default App;
