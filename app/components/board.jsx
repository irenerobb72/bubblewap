import React, { Component } from 'react'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fired: false
      circles: [{x: 400, y:400, r:30}]
    }
  }

  render() {
    var circles = this.state.circles.map((circle) => {
      return (<Circle classVal={'r' + circle.r} x={circle.x} y={circle.y} r={circle.r} localClick={this.onClick}
    })
    return (
      <svg>
        {circles}
      </svg>
    )
  }
  const Circle = React.createClass({
    this.state = {
      fired: false
    }
  })
  render() {
    return (
      <circle className={this.props.classVal} cx={this.props.x} cy={this.props.y} r={this.props.r} onClick={this.passUp}
    )
  }
}


export default Board
