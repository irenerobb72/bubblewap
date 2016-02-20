import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Audio } from 'audio'

export class Event extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()
    var circle = $(e.target)
    <Audio />
    <Circles />
  }
  render() {

  }
}

reactMixin(Event.prototype, PureRenderMixin)
