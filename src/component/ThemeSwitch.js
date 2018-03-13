import React, {Component} from 'react'

export default class ThemeSwitch extends Component {
  constructor () {
    super()
    this.state = { color: '',test: 0}
  }
  changeColor (color) {
      console.log(this.state.test);
    this.setState((prevState )=> ({
      color: color,
        test: prevState.test + 1  //测试一下如何利用上一个state
    }));

    if (this.props.onInitTheme) {
      this.props.onInitTheme(color)
    }
  }

  render () {

    return (
      <div>
        <button style={{cursor: 'pointer'}} onClick={this.changeColor.bind(this,'red')}>变红</button>
        <button style={{cursor: 'pointer'}} onClick={this.changeColor.bind(this,'blue')}>变蓝</button>
      </div>
    )
  }
}
