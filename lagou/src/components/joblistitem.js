import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './joblistitem.css';
import PropTypes from 'prop-types';

class Joblistitem extends Component {
  render() {
    var data = this.props.joblistitem;
  	return(
      <li className='joblistitem'>
        <img src={ data.companyLogo } />
        <div className='des fr'>
            <h3>{data.companyName}</h3>
            <p className='posi'><span className='fl'>{ data.positionName }[{data.city}]</span><span className='fr'>{ data.salary }</span></p>
            <p className='time'>{ data.createTime }</p>
        </div>
      </li>
  	)
  }
}

Joblistitem.propTypes = {
	joblistitem : PropTypes.object
}

export default Joblistitem;
