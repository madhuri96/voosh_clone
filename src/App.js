import './App.css';
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    username: "",
    email: "",
    companyname: "",
    yourtitl: "",
    password: ""
  });

  const [records,setRecords]=useState([]);

  const handleInput=(e)=>{
     const name = e.target.name; 
     const value = e.target.value;
     console.log(name,value);

     setState({...state, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

     const newRecord = {...state, id: new Date().getTime().toString() }
     setRecords([...records, newRecord])

     console.log(records);

     setState({username: "",email: "",companyname: "",yourtitl: "",password: ""});
  }


  return (
    <div className="App">
      <Navbar/>
      <div className='Main'>
      <div className="Container" >
       <div className='title'>Consolidate your restaurants' insights in one place. Unlock growth.</div>
       <div className='subtitle'>Your one stop solution to view mission-critical data and insights from all your locations in one place.</div>
        <br/><br/>
        <button className="btn btn-lg bg-primary text-white h2 btn2"><a href='#book'>Book Demo</a></button>
      </div>

      <div className='image_container'>
        <img id='img1' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp' alt=''/>
      </div>
      </div>

      <div className='booknow' id='book'>
        <div className='booknow_container'>
        <div className=' h1 text-white'>
          Book A Demo Now
        </div>

       <div className='form_container'>
      <form action='' className=' bg-white rounded'>
      <div className='m-1 '>
      <label htmlFor='username' className='text-dark h6'>Name</label>
      <br/>
      <input type="text" autoComplete='off' value={state.username} onChange={handleInput} name="username" id='username' className='intype' placeholder='Ex.John Doe'/>
      </div>

      <div className='m-1'>
      <label htmlFor='email' className='text-dark h6'>Email</label>
      <br/>
      <input type="text" autoComplete='off' value={state.email} onChange={handleInput} name="email" id='email' className='intype' placeholder='Ex.Mail@gmail.com'/>
      </div>

      <div className='m-1'>
      <label htmlFor='companyname' className='text-dark h6'>Company Name</label>
      <br/>
      <input type="text" autoComplete='off' value={state.companyname} onChange={handleInput} name="companyname" id='companyname'className='intype' placeholder='Ex.XYZ PVT LTD'/>
      </div>

      <div className='m-1'>
      <label htmlFor='yourtitle' className='text-dark h6'>Your title</label>
      <br/>
      <input type="text" autoComplete='off' value={state.yourtitle} onChange={handleInput} name="yourtitle" id='yourtitle' className='intype' placeholder='Ex.Oprational Head'/>
      </div>

      <div className='m-1'>
      <label htmlFor='password' className='text-dark h6'>Password</label>
      <br/>
      <input type="password" autoComplete='off' value={state.password} onChange={handleInput} name="password" id='password' className='intype' placeholder='password'/>
      </div>
      <br/>
      <button type="submit" className="btn btn1 btn-lg bg-primary text-white h2" onClick={handleSubmit}>Book Demo</button>
      
     </form>

     
     </div>
     </div>

      </div>

       {/* only for checking (form working) */}
      <div className='check bg-info' >
      {
        records.map((curElem) => {
          return(
            <div key={curElem.id}>
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.companyname}</p>
              <p>{curElem.yourtitle}</p>
              <p>{curElem.password}</p>
            </div>
          )
        })
      }
     </div>
    </div>
  );
}

export default App;
