import React, { useRef, useState } from 'react'
import OneRef from './component/OneRef';
import TwoRef from './component/TwoRef';
import ThreeRef from './component/ThreeRef';

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); //countRef.current

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current++;
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <OneRef />
      <TwoRef />
      <ThreeRef />
    </div>
  )
}