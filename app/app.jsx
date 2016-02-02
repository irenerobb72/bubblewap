import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const mountNode = document.getElementById('app')

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialBoard: new Array(5).fill('')
  }
  getBoard() {
    initialBoard.map()
  }
  render() {
    return (

    )
  }
}


class Plays extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentWillMount() {

  }
  render() {
    return (

    )
  }
}


class Circles extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
      circles: [x: 400, y: 400, r:256]
    }
  }
  handleClick() {
    if(!fired){
      this.setState {
        circles : this.state.circles(this.changeCircle)
      }
  }
  changeCircle() {
    var circles = this.state.circles.fontcolor("blue")
  }
  render() {

    )
  }
})

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  handleClick(event) {

  }
  render() {
    return (
      <svg>
        {circles}
      </svg>
      <Plays />
      <Board />
    )
  }
}

ReactDOM.render(<Main />, mountNode)
