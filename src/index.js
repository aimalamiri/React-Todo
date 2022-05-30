import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import TodoContainer from './components/TodoContainer';

// Styles
import './App.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
