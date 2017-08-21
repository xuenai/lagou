import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
  	var html;
	if(this.props.mytitle == 'lagou'){
		return (
			<header>拉勾网</header>
		)
	}else{
	    return (
	    	<header>
	    		职位详情
	    		<Link to='/'><div className='l'></div></Link>
	    		<Link to='/'><div className='r'></div></Link>
	    	</header>
	    )
	};
  }
}

Header.propTypes = {
	mytitle : PropTypes.string
}

export default Header;
