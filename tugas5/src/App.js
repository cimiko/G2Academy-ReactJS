import './App.css';
import { Home, Todo } from 'pages'
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
        <Route exact path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Router>

  );
}



export default App;
