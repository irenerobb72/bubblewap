import React, { Component } from 'react'

class Animation extends Component {
  constructor (props) {
    super(props)
    var circleColor = document.addEventListener(
      'onclick',
      this.changeColor.bind(this)
    )
    this.state = {
      circleColor: 'circles'
    }
  }
  changeColor(e) {
    event.onClick === this.props.onClick
  }
  render() {
    return (

    )
  }
}


export default Animation
