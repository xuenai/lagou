import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './mysearch.css';
import PropTypes from 'prop-types';
import Joblist from './joblist';
import $ from 'jquery';
import Header from '../components/header';

class Mysearch extends Component {
  constructor(){
    super();
    this.state={
      joblist:[]
    }
  }
  componentWillMount(){
    $.get('/api/joblist',(data)=>{
      this.setState({
        joblist : data.joblist
      })
    })
  }
  render() {
  		return(
  			<div className='mysearch'>
          <Header mytitle='lagou' />
  				<div className='sousuo clear'>
            <Link to='/search/city'><div>成都<span></span></div></Link>
            <div><input type='text' placeholder='搜索职位或公司' /><span></span></div>
          </div>
          <ul className='searchHistory'>
            <li>大数据<span>×</span></li>
            <li>vr<span>×</span></li>
            <li>h5<span>×</span></li>
          </ul>
          <div className='result'>
            <p>将搜索地区和关键词设为定制条件</p>
            <Joblist joblist={this.state.joblist} />  
          </div>
  			</div>
  		)	
  }
}

// Mysearch.propTypes = {
// 	mytitle : PropTypes.string
// }

export default Mysearch;
