import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from "react-router-dom";

import 'd98c_dynamic-forms/dist/index.css'

// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
