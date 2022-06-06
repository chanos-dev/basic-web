import { useState, useEffect, useCallback } from 'react';
import TwoApp from './component/TwoApp';

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunc = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log('Call useEffect!!');
  }, [someFunc]);

  return (
    <div>
      <input type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}>      
      </input>
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunc}>Call Func</button>
      <TwoApp />
    </div>    
  )
}

export default App;