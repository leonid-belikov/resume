import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';
import './index.css';
import initialState from './state.js';

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_CELSIUS':
			return Object.assign({}, state, {
				testPage: {
					temperature: action.temperature,
					scale: 'c'
				}
			});
		case 'CHANGE_FAHRENHEIT':
			return Object.assign({}, state, {
				testPage: {
					temperature: action.temperature,
					scale: 'f'
				}
			});
		default: return state;
	}
}

const store = createStore(reducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
