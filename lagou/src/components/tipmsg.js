import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './tipmsg.css';
import PropTypes from 'prop-types';

class Tipmsg extends Component {
  render() {
  	return(
  		<div className='tipmsg'>
  			<p>十秒钟定制职位</p>
  			<div>
  				{this.props.login ? <span className='write'>编辑</span> : <span><Link to='/login'>去登录</Link></span>}
  			</div>
  		</div>
  	)
  }
}

Tipmsg.propTypes = {
	login : PropTypes.bool
}

export default Tipmsg;
