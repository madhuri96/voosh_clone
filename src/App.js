import './App.css';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Main'>
      <div className="Container" >
       <div className='title'>Consolidate your restaurants' insights in one place. Unlock growth.</div>
       <div className='subtitle'>Your one stop solution to view mission-critical data and insights from all your locations in one place.</div>

      </div>
      <div className='image_container'>
        <img id='img1' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp' alt=''/>
      </div>
      </div>
      <div className='booknow'>

      </div>
    </div>
  );
}

export default App;
