import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './jobdetails.css';
import Header from '../components/header';
import Joblist from '../components/joblist';
import $ from 'jquery';

class Jobdetails extends Component {
  constructor(){
  	super();
  }
  render() {
    return (
      <div className="jobdetails">
        <Header mytitle='jobdetails' />
        <div className='contents'>
          <div className='title'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Jobdetails;
