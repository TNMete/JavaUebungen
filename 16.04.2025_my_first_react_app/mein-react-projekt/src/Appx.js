import logo from './Joshua.png';
import './App.css';
import { Button } from '@mui/material';
import CompDate from './CompDate';
import CompTitel from './CompTitel';
import CompTierCard from './CompTierCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CompTitel />

        <CompTierCard />

        <Button variant="contained" color="primary"> HILFE</Button>

        <h2>Mein Kalender</h2>
        <CompDate />

      </header>
    </div>
  );
}

export default App;
