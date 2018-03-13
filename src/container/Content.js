import React,{Component, PropTypes} from 'react'
import Content from '../component/Content'
import {connect} from 'react-redux'
import { initTheme} from '../reducer/themeStyle'


class ContentContainer extends Component {
  static propTypes = {
    color: PropTypes.string,
    oninitTheme: PropTypes.func
  }
  componentWillMount () {
    //this.props.oninitTheme(color)
  }
  handleInitColor (color) {
    if (this.props.oninitTheme) {
      this.props.oninitTheme(color)
    }
  }
  render () {
    return (
      <Content
      color= {this.props.color}
      onInitTheme= {this.handleInitColor.bind(this)}/>
    )
  }
}
const mapstateToProps = (state) => {
  return {
    color: state.color
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    oninitTheme: (color) => {
      dispatch(initTheme(color))
    }
  }
}

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(ContentContainer)
