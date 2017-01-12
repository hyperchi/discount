import React, { Component, PropTypes } from 'react'
import ss from './styles.scss';

export default class Picker extends Component {
  createQoupon(data) {
    let res = [];
 			for (let key in data) {
         res.push(
            <div className='item'>

              <img className='icon' src={require('../../assets/a.jpg')}/>
              <div className='bottom'>
                <div className='left'>
                  <img className='icon' src={require('../../assets/b.png')}/>
                </div>
                <div className='right'>
                  <p>{data[key]['offer-title']}</p>
                  <p>{data[key]['coupon']}</p>
                </div>
              </div>
            </div>)

			}
      return res;
  }      
  render() {
    let data = this.props.data;
    console.error("@@@@@", this.props);
    console.error("#####", data);

    // let bg = require(data[0].bg);
    return (
      <div className='content'>
        <h1 className="top-picks-placements-title">500,000+ Coupons for 50,000&nbsp;Stores</h1>

        <div className="chartContainer">
        {this.createQoupon(data)}
        </div>
      </div>
    )
  }
}

Picker.propTypes = {
  // options: PropTypes.arrayOf(
  //   PropTypes.string.isRequired
  // ).isRequired,
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired
}
