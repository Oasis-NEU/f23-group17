
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>

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
      </header>
    </div>
  );
}

export default App;
