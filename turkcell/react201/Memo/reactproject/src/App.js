import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './Header';

function App() {

  const [number, setNumber] = useState(0);
  //const data = {name:"yavuz"}; useMemo kullanılmazsa sürekli render ettiriyo
  const data = useMemo(()=>{
    return {name:"mehmet"};
  },[])

  const increment = useCallback(()=> {
    setNumber((prevState) => prevState +1)
  },[]);
  
  return (
    <div className="App">
      <Header 
        number={number>5? number:0} 
        data={data} 
        increment={increment}/>
      
      <div>{number}</div>
      <button onClick={()=>setNumber(number+1)}> click +1 </button>
    </div>
  );
} 

export default App;
