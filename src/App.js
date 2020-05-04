import React from 'react';
import Playground from './Playground';
import Paint from './components/Paint';
import WindowSize from './components/WindowSize';

function App() {
  return (
    <div className="App">
        <Paint />
        <Playground />
        <WindowSize />
    </div>

  );
}

export default App;
