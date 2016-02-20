import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Event extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()

  }
  render() {

  }
}

reactMixin(Event.prototype, PureRenderMixin)
