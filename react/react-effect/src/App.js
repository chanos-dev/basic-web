import React, { useState, useEffect } from 'react';
import CleanUp from './component/CleanUp';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('useEffect~!');
  });
  
  useEffect(() => {
    console.log('only first!');
  },[]);

  useEffect(() => {
    console.log('count : dependency array~!');
  }, [count]);

  useEffect(() => {
    console.log('name : dependency array~!');
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate} >Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
      <CleanUp></CleanUp>
    </div>
  );
}

export default App;
