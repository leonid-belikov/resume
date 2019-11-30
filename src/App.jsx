import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import { connect } from 'react-redux';

import css from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Skills from "./components/Skills/Skills";

class App extends React.Component {
	render() {

		return (
			<BrowserRouter>
				<div className={css.container}>
					<Header/>
					<Navbar/>
					<div className={css.backTitle}>{this.props.backTitle}</div>
					<div className={css.content}>
						<Switch>
							<Route exact path="/" render={() => <Redirect to="/profile"/>}/>
							<Route path="/profile" component={Profile}/>
							<Route path="/dialogs" component={Dialogs}/>
							<Route path="/test" component={Skills}/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	state => ({
		backTitle: state.skillsPage.backTitle
	})
)(App);
