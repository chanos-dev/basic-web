import React, { useCallback, useState } from 'react'
import Box from './Box';

export default function TwoApp() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{background: isDark ? 'black' : 'white'}}>
      <input type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}>
      </input>
      <button onClick={() => setIsDark(!isDark)}>Change {isDark.toString()}</button>
      <Box createBoxStyle={createBoxStyle}/>      
    </div>
  )
}
