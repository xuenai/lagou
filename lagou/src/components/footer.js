import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
		<div className = {this.props.activeDiv == 'job' ? 'active' : ''}>
			<IndexLink to='/' activeClassName='active'>
				<i className="iconfont icon-shouye"></i>
				<span>职位</span>
			</IndexLink>
		</div>
		<div className = {this.props.activeDiv == 'search' ? 'active' : ''}>
			<Link to='/search' activeClassName='active'>
				<i className="iconfont icon-sousuo"></i>
				<span>搜索</span>
			</Link>
		</div>
		<div className = {this.props.activeDiv == 'mine' ? 'active' : ''}>
			<Link to='/mine' activeClassName='active'>
				<i className="iconfont icon-wode"></i>
				<span>我的</span>
			</Link>
		</div>  	
      </footer>
    );
  }
}

Footer.propTypes = {
	activeDiv : PropTypes.string
}

export default Footer;
