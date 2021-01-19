import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ComingSoon from '../pages/ComingSoon';
import PageNotFound from '../pages/PageNotFound';
import { AuthProvider } from '../context/AuthContext';
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
				<AuthProvider>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/login' component={Login} />
						<Route path='/store' component={ComingSoon} />
						<Route path='/404' component={PageNotFound} />
						<Redirect to='/404' />
					</Switch>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
