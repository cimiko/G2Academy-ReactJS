// import logo from './logo.svg';
import Header from './templates/Header'
import Button from './ui-kit/Atom/Button';

function App() {
  return (
    <div className="App">
      <Header/>
      <Button type="primary">Sign-Up</Button>
      <Button type="secondary" childre
      n="Login"/>
    </div>
  );
}

export default App;
