import React, {Component, PropTypes} from 'react'
import ThemeSwitch from './ThemeSwitch'
export default class Content extends Component {
  static propTypes = {
    color: PropTypes.string,
    onInitTheme: PropTypes.func
  }
  constructor () {
    super()
    this.state = { color: ''}
  }

handleInitColor (color) {
  if (this.props.onInitTheme) {
    this.props.onInitTheme(color)
  }
  this.setState({
    color: color
  })

}
  render () {
    return (
      <div>
        <p style={{color:this.props.color}}>该配合你演出的我演视而不见</p>
        <ThemeSwitch onInitTheme={this.handleInitColor.bind(this)}/>
      </div>
    )
  }
}
