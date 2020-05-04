import React, { useState, useEffect } from 'react';
import randomColor from './randomColor';

export default function Playground() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor());
  }, [count]);

  return (
    <div style={{ padding: `20px`, border: `5px solid ${color}` }}>
      {count}
      <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)}>-</button>
      <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>+</button>
    </div>
  );
}
