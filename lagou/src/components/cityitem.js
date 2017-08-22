import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './cityitem.css';
import PropTypes from 'prop-types';

class Cityitem extends Component {
  render() {
  	var active = this.props.citydata.active;
    var lis = this.props.citydata.citys.cityList.map((data,index)=>{
    	return active == data ? <li className='active' key={index}>{data}</li> : <li key={index}>{data}</li>;
    });
  	return(
  		<div className='cityitem'>
	  		<p>{this.props.citydata.citys.nameStr}</p>
	  		<ul>{lis}</ul>
  		</div>
  	)
  }
}

Cityitem.propTypes = {
	citydata : PropTypes.object
}

export default Cityitem;
