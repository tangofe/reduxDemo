import React,{ Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Header from '../component/Header'
class HeaderContainer extends Component {
  static propTypes = {
    color: PropTypes.string,
    onInitTheme: PropTypes.func
  }

  componentWillMount() {

  }
  render() {
    return (
      <Header color={this.props.color} />
    )
  }

}
const mapstateToProps = (state) => {
  return {
    color: state.color
  }
}

export default connect(mapstateToProps)(HeaderContainer)
