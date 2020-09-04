import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Recipe from './components/Recipe';
import Search from './components/Search';

const routing = (
	<React.StrictMode>
		<Router>
			<div className="main">
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/search" component={Search} />
					<Route path="/recipe/:name/?:uri" component={Recipe} />
				</Switch>
			</div>
		</Router>
	</React.StrictMode>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
