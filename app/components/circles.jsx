import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Circles extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="circlesboard">
        <div className="circle">
          <svg width="2200" height="2200">
            <circle className="one" cx="830" cy="60" r="10"></circle>
            <circle className="two" cx="850" cy="60" r="10"></circle>
            <circle className="three" cx="870" cy="60" r="10"></circle>
            <circle className="four" cx="890" cy="60" r="10"></circle>
            <circle className="five" cx="910" cy="60" r="10"></circle>

            <circle className="six" cx="830" cy="80" r="10"></circle>
            <circle className="seven" cx="850" cy="80" r="10"></circle>
            <circle className="eight" cx="870" cy="80" r="10"></circle>
            <circle className="nine" cx="890" cy="80" r="10"></circle>
            <circle className="ten"  cx="910" cy="80" r="10"></circle>

            <circle className="eleven" cx="830" cy="100" r="10"></circle>
            <circle className="tweleve" cx="850" cy="100" r="10"></circle>
            <circle className="thirteen" cx="870" cy="100" r="10"></circle>
            <circle className="fourteen" cx="890" cy="100" r="10"></circle>
            <circle className="fifteen" cx="910" cy="100" r="10"></circle>

            <circle className="sixteen" cx="830" cy="120" r="10"></circle>
            <circle className="seventeen" cx="850" cy="120" r="10"></circle>
            <circle className="eighteen" cx="870" cy="120" r="10"></circle>
            <circle className="nineteen" cx="890" cy="120" r="10"></circle>
            <circle className="twenty" cx="910" cy="120" r="10"></circle>

            <circle className="twentyone" cx="830" cy="140" r="10"></circle>
            <circle className="twentytwo" cx="850" cy="140" r="10"></circle>
            <circle className="twentythree" cx="870" cy="140" r="10"></circle>
            <circle className="twentyfour" cx="890" cy="140" r="10"></circle>
            <circle className="twentyfive" cx="910" cy="140" r="10"></circle>
          </svg>
        </div>
      </div>
  }
}

reactMixin(Circles.prototype, PureRenderMixin)
