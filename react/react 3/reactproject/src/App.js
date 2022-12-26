import react, { useState } from "react"
import Counter from './components/Counter';
import User from './components/User';
import Array from './components/Array';
import Form from './components/Form';
import Form2 from './components/Form2';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

function App() {
    const [isVisible, setIsVisible] = useState(true);
  return (
     <div>
          <Counter/>
          <User/>
          <Array/>
          <Form/>
          <Form2 />
          <Counter2 />

          <button onClick={() => setIsVisible(!isVisible)}> show/hide </button>
          {isVisible && <Counter3 />}
          
         
     </div>
  );
}

export default App;