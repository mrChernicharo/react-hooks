import React, { useState, useEffect } from 'react';

export default React.memo(() => {
  console.log('render')
  const [name, setName] = useState('');
  return (
    <div className="header-name">
      <input
        style={{fontSize: 30}}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
    </div>

  );
})
