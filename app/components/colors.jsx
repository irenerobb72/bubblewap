import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Colors extends Component {
  constructor(props) {
    super(props)
  }
  changeColor() {
    
  }
  render() {
    return (

  }
}

reactMixin(Colors.prototype, PureRenderMixin)
