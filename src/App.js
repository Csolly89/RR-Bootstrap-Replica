import './App.css';

import Topbar from './Components/Navbar';
import Locations from './Components/Locations';
import ProduceImg from './Produce.avif'

function App() {
  return (
    <div className="App">
      <Topbar />
    {/* Background banner */}
      <div className="Card">
      <img 
          className='Img'
          src={ProduceImg}
          alt='Produce wall'
          />
        <div id="text">
        <h1>Order groceries for</h1>
        <h1>delivery or pickup today</h1>
        </div>
        <h2 id="b2">Whatever you want from local stores, brought right to your door.</h2>
      </div>
      {/* Store Locations */}
      <Locations />
    </div>
    
  );
}

export default App;
