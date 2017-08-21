import React from 'react';
import ReactDOM from 'react-dom';
import './js/reset';
import { Router, Route , hashHistory,IndexRoute,browserHistory} from 'react-router';
import './css/reset.css';
import './index.css';
import Job from './pages/job';
import Login from './pages/login';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={Job}></Route>
		<Route path='/search'></Route>
		<Route path='/mine'></Route>
		<Route path='/login' component={Login}></Route>
	</Router>
	), document.getElementById('root'));
registerServiceWorker();