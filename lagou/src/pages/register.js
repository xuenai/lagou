import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './register.css';
import $ from 'jquery';

class Register extends Component {
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
      <div className="register">
          <form>
              <div>
                <input className='tel' type='text' placeholder='手机号' />
                <span className='tip'>fasdf</span>
              </div>
              <div className='clear'>
                <input className='yzm' type='text' placeholder='证明您不是机器人' />
                <span className='tip'>fsdfsdf</span>
                <div className='yzmvalue'>454</div><p>看不清楚，<a href="">换一张</a></p>
              </div>
              <div className='mesyzm'>
                <input type='text' placeholder='短信验证码' />
                <span className='tip'>fsdfsdf</span>
                <div className="getbtn">获取</div>
              </div>
              <div className='password'>
                {pwd} <span className={this.state.showpass && 'showpwd'} onClick={this.showpwd}></span>
                <b>6-16位密码</b>
              </div>
              <button className='registerbtn'>注册</button>
              <p>已有账号？</p>
              <Link to='/login'><button className='loginbtn'>登录</button></Link>
              <p className='agree'>点击注册，即代表您同意 <a href=''>《拉勾用户协议》</a></p>
          </form>
      </div>
    );
  }
}

export default Register;
