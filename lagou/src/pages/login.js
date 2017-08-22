import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './login.css';
import $ from 'jquery';

class Login extends Component {
  constructor(){
  	super();
  	this.state={
  	   showpass:false	
  	};
    this.showpwd = this.showpwd.bind(this);
  }

  showpwd(e){
    this.setState({
      showpass:!this.state.showpass
    })
  }

  render() {
    var pwd = this.state.showpass ? <input type='text' placeholder='密码' /> : <input type='password' placeholder='密码' />;
    return (
      <div className="login">
        <form>
            <input type='text' placeholder='已验证手机/邮箱'/>
            <div>{pwd} <span className={this.state.showpass && 'showpwd'} onClick={this.showpwd}></span></div>
            <button className='loginbtn'>登录</button>
        </form>
        <p>还没得账号？</p>
        <Link to='/register'><button className='registerbtn'>注册</button></Link>
      </div>
    );
  }
}

export default Login;
