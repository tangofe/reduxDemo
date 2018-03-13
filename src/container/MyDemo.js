import React, {Component} from 'react'
import Header from './Header'
import Content from './Content'
export default class MyDemo extends Component {


  render () {

    return (
      <div className='title'>
        <Header/>
        <Content/>
      </div>
    )
  }
}
