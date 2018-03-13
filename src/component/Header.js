import React, {Component, PropTypes} from 'react'

export default class Header extends Component {
  static propTypes = {
    color: PropTypes.string,
  }
  render () {

    return (
      <div className='title'>
        <h1 style={{color: this.props.color}}>死亡如风，常伴吾身</h1>
      </div>
    )
  }
}
