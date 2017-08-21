import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './login.css';
import $ from 'jquery';

class Login extends Component {
  constructor(){
  	super();
  	this.state={
  		
  	};
  }
  render() {
    return (
      <div className="login">
        <form>
            <input type='text' placeholder='已验证手机/邮箱'/>
            <div><input type='password' placeholder='密码' /><span></span></div>
            <button>登录</button>
        </form>
        <p>还没得账号？</p>
        <button>注册</button>
      </div>
    );
  }
}

export default Login;
