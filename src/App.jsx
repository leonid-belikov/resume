import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Test from "./components/Test/Test";

const App = () => {
	return (
		<BrowserRouter>
			<div className={css.container}>
				<Header/>
				<Navbar/>
				<div className={css.content}>
					<Switch>
						<Route exact path="/" render={ () => <Redirect to="/profile"/> }/>
						<Route path="/profile" component={Profile}/>
						<Route path="/dialogs" component={Dialogs}/>
						<Route path="/test" component={Test}/>
					</Switch>
				</div>
				<div className={css.footer}>
					Footer
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
