import React from 'react';
import ReactDOM from 'react-dom';
import './js/reset';
import { Router, Route , hashHistory,IndexRoute,browserHistory} from 'react-router';
import './css/reset.css';
import './index.css';
import Job from './pages/job';
import Login from './pages/login';
import Search from './pages/search';
import Register from './pages/register';
import Mine from './pages/mine';
import Jobdetails from './pages/jobdetails';
import Mysearch from './components/mysearch';
import City from './components/city';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={Job}></Route>
		<Route path='/search' component={Search}>
			<IndexRoute component={Mysearch} />
			<Route path='city' component={City} />
		</Route>
		<Route path='/mine' component={Mine}></Route>
		<Route path='/login' component={Login}></Route>
		<Route path='/register' component={Register}></Route>
		<Route path='/jobdetails' component={Jobdetails} />
	</Router>
	), document.getElementById('root'));
registerServiceWorker();