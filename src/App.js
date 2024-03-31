import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // const [count, setcount] = useState(0)
  return (
    // <div className='container'>
    //   <h1>Counter App</h1>
    //   <span>{count}</span>
    //   <div>
    //     <button className='btn-decrement' onClick={() => setcount(count-1)}>-</button>
    //     <button className='btn-increment' onClick={() => setcount(count+1)}>+</button>
    //   </div>
    // </div>
    
    // <div>
    //   {/* <form className='contain'>
    //     <input type='text' placeholder='Enter User name' onChange={(e) => setusername(e.target.value)}></input>
    //     <input placeholder='*******'></input>
    //     <button type='submit'>LogIn</button>
    //   </form> */}
    // </div>
    <div><h1>welcome</h1></div>
  );
}

export default App;
