import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import Display from './Display';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Display />, document.getElementById('root'));
registerServiceWorker();
