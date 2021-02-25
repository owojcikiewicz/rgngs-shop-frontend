import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Item from "./components/item/item";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Item />
  </React.StrictMode>,
  document.getElementById('root')
);

