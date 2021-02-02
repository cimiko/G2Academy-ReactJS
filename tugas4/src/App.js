<<<<<<< HEAD
import './App.css';
import { Home, Destinasi, Promo } from 'pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/destinasi">
            <Destinasi />
          </Route>
          <Route path="/promo">
            <Promo />
          </Route>
        </Switch>
      </Router>
=======
import logo from './logo.svg';
import './App.css';

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
      </header>
>>>>>>> f196fc1c4974b858ee67a2e849cdacfac76b8342
    </div>
  );
}

export default App;
