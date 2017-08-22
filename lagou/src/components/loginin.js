import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './loginin.css';
import PropTypes from 'prop-types';

class Loginin extends Component {
  render() {
  		return(
  			<div className='loginin'>
  				<div className='userphoto'>
            <a href='' >简历></a>
            <div className='img'><img src='./img/userphoto.jpg' /></div>
            <p>夏涛</p>
          </div>
  				<ul className='options clear'>
  					<li>投递</li>
  					<li>面试</li>
  					<li>邀约</li>
  					<li>收藏</li>
  				</ul>
          <button>退出登录</button>
  			</div>
  		)	
  }
}

// Loginin.propTypes = {
// 	mytitle : PropTypes.string
// }

export default Loginin;
