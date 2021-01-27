import './App.css';
import { Body } from 'ui-kit/Organism'
import Backvid from 'backvid.mp4'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Body />
      <video className='videoTag' autoPlay loop muted>
        <source src={Backvid} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
