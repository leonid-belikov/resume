import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';
import './index.css';
import initialState from './state.js';

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_BACKTITLE':
			const newSearchValue = action.payload;
			const newBackTitleValue = action.payload || 'skills';
			return Object.assign({}, state, {
				skillsPage: Object.assign({}, state.skillsPage, {
					backTitle: newBackTitleValue,
					searchRequest: newSearchValue
				})
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
