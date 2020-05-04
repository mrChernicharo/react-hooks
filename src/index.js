import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Canvas from './components/Canvas';

import Paint from './components/Paint'


ReactDOM.render(
  <React.StrictMode>
      <Paint />
  </React.StrictMode>,
  document.getElementById('root')
);

