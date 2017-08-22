import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './search.css';
import Footer from '../components/footer';
import $ from 'jquery';



class Search extends Component {
  constructor(){
  	super();
  }

  render() {
    return (
      <div className="search">
        {this.props.children}
      	<Footer activeDiv='search' />
      </div>
    );
  }
}

export default Search;
