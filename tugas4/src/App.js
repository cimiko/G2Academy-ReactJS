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
    </div>
  );
}

export default App;
