import React, { useState, useEffect, useRef, useCallback} from 'react';
import randomColor from './randomColor';

export default function Playground() {
  const [count, setCount] = useState(30);

  const inputRef = useRef();


  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(randomColor());
    inputRef.current.focus()
  }, []);

  const calculate = useCallback(<Calculate />, [count])


  return (
    <div style={{ display: 'flex', alignItems: 'center' , padding: `20px`, borderTop: `10px solid ${color}` }}>
      <div style={{ padding: `20px 0`}}>{count}</div>
      <button type="button" onClick={() => setCount((currentCount) => currentCount < 100 ? currentCount + 1 : currentCount = 100)}>+</button>
      <button type="button" onClick={() => setCount((currentCount) => currentCount > 0 ? currentCount - 1 : currentCount = 0)}>-</button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>

      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
      <span>{calculate}</span>
    </div>
  );
}

function Calculate() {
  const renderCount = useRef(1);
  return <div>{renderCount.current++}</div>
}

//
//
