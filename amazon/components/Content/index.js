import React, { Component, PropTypes } from 'react'
import ss from './styles.scss';

export default class Picker extends Component {
  render() {
    // const { value, onChange, options } = this.props

    return (
      <div>
        <h1 className="top-picks-placements-title">500,000+ Coupons for 50,000&nbsp;Stores</h1>

        <div className="chartContainer">
            <div className='item'><div className='bottom'>1</div></div>
            <div className='item'>2</div>
            <div className='item'>3</div>
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
