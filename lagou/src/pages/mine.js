import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import Header from '../components/header';
import './mine.css';
import Loginout from '../components/loginout';
import Loginin from '../components/loginin';
import Footer from '../components/footer';

class Mine extends Component{
	constructor(){
		super();
	}
	render(){
		var html = false ? <Loginin /> : <Loginout />;
		return(
			<div className='mine'>
				<Header mytitle='lagou' />
				{html}
  				<Footer activeDiv='mine' />
			</div>
		)
	}
}

export default Mine