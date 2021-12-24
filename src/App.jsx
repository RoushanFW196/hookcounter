
import {useState} from 'react';
import './App.css';

function App() {
  
 const [count,setCount]=useState(0);


 const addone=(value)=>{
   setCount(count+value);
 }
 
 const double=(val)=>{
  // count=count*val;
  setCount(count*val);
 }
 



  return (
     <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={()=>addone(1)}>Inc</button>
       <button onClick={()=>addone(-1)}>Dec</button>
       <button onClick={()=>double(2)}>Double</button>   
     </div>
  )
}

export default App;
