import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Timer} from "./Timer";

ReactDOM.render(
  <React.StrictMode>
    <Timer/>
  </React.StrictMode>,
  document.getElementById('root')
);