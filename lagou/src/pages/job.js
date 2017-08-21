import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './job.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Tipmsg from '../components/tipmsg';
import Joblist from '../components/joblist';
import $ from 'jquery';

class Job extends Component {
  constructor(){
  	super();
	this.state={
		joblist:[]
	};
	this.handleMore = this.handleMore.bind(this);  
	this.getdata = this.getdata.bind(this);	
  }
  componentWillMount(){
  	this.getdata();
  }
  handleMore(){
  	$.get('/api/joblist',(jobdata)=>{
  		console.log(520);
  		this.setState(()=>{
  			return {joblist : [...this.state.joblist,...jobdata.joblist]};
  		})
  	});
  }
  getdata(){
  	$.get('/api/joblist',(data)=>{
  		this.setState(()=>{
  			return {joblist:data.joblist};
  		})
  	});
  }

  render() {
    return (
      <div className="job">
        <Header mytitle='lagou' />
        <Tipmsg login={false} />
        <Joblist joblist={ this.state.joblist } />
        <div className='more' onClick={this.handleMore}>加载更多</div>
        <div className='jobfooter'>
        	<p>©2015 lagou.com, all right reserved </p>
        	<p><span className='mobile'>移动版 · </span><span>电脑版 · </span><a href='javascript:;'>回顶部</a></p>
        </div>
		<Footer activeDiv='job' />
      </div>
    );
  }
}

export default Job;
