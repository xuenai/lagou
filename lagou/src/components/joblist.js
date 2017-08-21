import React, { Component } from 'react';
import './joblist.css';
import Joblistitem from './joblistitem';
import PropTypes from 'prop-types';
var count=0;
class Joblist extends Component {
  render() {
    var joblist = this.props.joblist.map((item,index)=>{
        return <Joblistitem joblistitem={item} key={count++} />;
    });

  	return(
      <ul>{joblist}</ul>
  	)
  }
}

Joblistitem.propTypes = {
	joblist : PropTypes.array
}

export default Joblist;
