import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Audio extends Component {
  constructor(props) {
    super(props)
  }
  audioElement() {
    document.createElement('audio')
      audioElement.setAttribute('src', 'audio/fettywap.mp3')
      audioElement.setAttribute('autoplay', 'autoplay')
      $.get()
      audioElement.addEventListener("load", function() {
        audioElement.Play()
    }, true)
  }
  render() {
    return (

  }
}

reactMixin(Audio.prototype, PureRenderMixin)
