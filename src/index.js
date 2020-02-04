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
			let searchUpdate = {};
			if (action.fromSearch) {
				const newSearchValue = action.payload;
				searchUpdate = {
					skillsPage: Object.assign({}, state.skillsPage, {
						searchRequest: newSearchValue
					})
				}
			}

			const newBackTitleValue = action.payload || 'skills';
			return Object.assign({}, state, searchUpdate, {
					backTitle: newBackTitleValue
			});

		case 'CHANGE_YEAR':
			const year = action.payload;
			const expPage = Object.assign({}, state.expPage);
			expPage.selectedYear = year;
			return Object.assign({}, state, {expPage});

		case 'CHANGE_PROJECT':
			const newIdx = action.payload;
			const portfolioPage = Object.assign({}, state.portfolioPage);
			portfolioPage.selectedProject = newIdx;
			return Object.assign({}, state, {portfolioPage});

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
