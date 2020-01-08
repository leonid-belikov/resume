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

		case 'MOVE_CONTACT_ICONS':
			const x = action.payload.x;
			const y = action.payload.y;
			const width = document.documentElement.clientWidth;
			const height = document.documentElement.clientHeight;
			const dx = ((width / 2) - x) / (width / 2);
			const dy = ((height / 2) - y) / (height / 2);
			const rounded_dx = Math.round(dx * 10) / 10;
			const rounded_dy = Math.round(dy * 10) / 10;

			const contacts = state.contacts.slice();
			for (let item of contacts) {
				item.style.left = item.initLeft + item.deltaMove * rounded_dx;
				item.style.top = item.initTop + item.deltaMove * rounded_dy;
			}
			return Object.assign({}, state, {contacts});

		case 'CHANGE_YEAR':
			const year = action.payload;
			const expPage = Object.assign({}, state.expPage);
			expPage.selectedYear = year;
			return Object.assign({}, state, {expPage});

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
