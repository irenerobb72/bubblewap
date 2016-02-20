import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Circles } from './circles'
import { Event } from './game'



export class Game extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()

  }
  render() {
    <div className="board">
      <Circles/>
    </div>
  }
}

reactMixin(Game.prototype, PureRenderMixin)
