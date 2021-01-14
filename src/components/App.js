import React from 'react';
import Home from '../pages/Home';
import ComingSoon from '../pages/ComingSoon';
import PageNotFound from '../pages/PageNotFound';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={ComingSoon} />
					<Route path='/404' component={PageNotFound} />
					<Redirect to='/404' />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
