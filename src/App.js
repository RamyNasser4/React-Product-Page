import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ramy Nasser"
  const age = 18;
  const Job = "Student";
  return (
    <div className="App">
      <h3>Name : {name}</h3>
      <p>Age: {age}</p>
      <p>Job: {Job}</p>
    </div>
  );
}

export default App;
