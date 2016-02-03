import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }
  listen() {
    let that = this
    $(() => {
      $('.circles').on('click', function(e) {
        var circle = $(e.target)
        circle.css('fill', 'blue')
        var audioElement = document.createElement('audio')
        audioElement.setAttribute('src', 'audio/Dank Soundboard 1.app')
        audioElement.setAttribute('autoplay', 'autoplay')

        $.get()
        audioElement.addEventListener("load", function() {
          audioElement.play()
        }, true)

        // that.controller.changeColor()
        // that.controller.addSound()
        // that.controller.changeSize()
      })
    })
  }
}
