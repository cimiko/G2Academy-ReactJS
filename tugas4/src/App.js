import './App.css';
import { Home, Destinasi, Promo } from 'pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
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
  );
}

export default App;
