import React, { Component } from 'react';
import { Link,IndexLink } from 'react-router';
import './city.css';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Header from '../components/header';
import Cityitem from '../components/cityitem';

class City extends Component {
  constructor(){
    super();
    this.state={
      citys:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","东莞","大连","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","哈尔滨","合肥","呼和浩特","海口","衡水","杭州","惠州","湖州","金华","九江","江门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","聊城","廊坊","丽水","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","眉山","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["青岛","秦皇岛","清远","泉州","衢州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["上海","石家庄","汕头","绍兴","沈阳","三亚","深圳","苏州","天津","唐山","太原","台州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","咸阳","徐州","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}],
      activeCity:'成都'
    }
  }
  render() {
      var list = this.state.citys.map((obj,index)=>{
          return <Cityitem citydata={ {citys:obj,active:this.state.activeCity} } key={index} />;
      })
  		return(
  			<div className='city'>
          <Header />
          <div className='mycity'>
            {list}
          </div>
  			</div>
  		)	
  }
}

// City.propTypes = {
// 	mytitle : PropTypes.string
// }

export default City;
