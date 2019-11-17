import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import state from './state.js';

ReactDOM.render(
	<App state={state}/>,
	document.getElementById('root')
);
