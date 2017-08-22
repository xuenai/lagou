import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './loginout.css';
import PropTypes from 'prop-types';

class Loginout extends Component {
  render() {
  		return(
  			<div className='loginout'>
  				<div className='tip'><Link to='/login'>登录/注册</Link></div>
  				<ul className='options clear'>
  					<li>投递</li>
  					<li>面试</li>
  					<li>邀约</li>
  					<li>收藏</li>
  				</ul>
  			</div>
  		)	
  }
}

// Loginout.propTypes = {
// 	mytitle : PropTypes.string
// }

export default Loginout;
