
import { Routes, Route } from "react-router-dom"

import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">

      <Routes>
        <Route path="/signup" element={SignUpForm()}/>
        <Route path="/login" element={LoginForm()}/>
      </Routes>

      </header>
    </div>
  );

}

export default App;
