import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './elements/Header/Header';
import Home from './Home/Home';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie/Movie';
import NotFound from './elements/NotFound/NotFound';

const App = () => {
	return (
		<Router>
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/" exact component={Home}  />
					<Route path="/:movieId" exact component={Movie}  />
					<Route component={NotFound} />
				</Switch>
			</React.Fragment>
		</Router>
	)
}

export default App;
