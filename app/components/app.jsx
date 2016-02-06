import React, { Component } from 'react'
import Animation from './components/animation.jsx'
import Circles from './components/circles.jsx'
import Board from './components/board.jsx'

class App extends Component {
  constructor (props) {
    super(props)
      var clickCode = document.addEventListener (
        'onclick',
        this.handleClick.bind(this)
      )
      this.state = {
        clickCode
      }
    }
  handleClick(e) {
    e.preventDefault()
    this.setState({clickCode: e.clickCode})
  }
  render() {
    return (

    )
  }
}


export default Animation
