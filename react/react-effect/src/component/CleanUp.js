import React, { useState } from 'react';
import Timer from './Timer';

export default function CleanUp() {

  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}
