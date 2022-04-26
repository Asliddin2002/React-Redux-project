import './App.css';
import Navbar from './Navbar';
import Listings from './components/listings';
import Filter from './components/Filter';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content mt-5 container'>
        <Form/>
        <div className='news me-4  '>
          <Filter/>
          <Listings/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
