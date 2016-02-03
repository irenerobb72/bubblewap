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
        circle.css('fill', '#FFD700')

        var audioElement = document.createElement('audio')
        audioElement.setAttribute('src', 'audio/fettywap.mp3')
        audioElement.setAttribute('autoplay', 'autoplay')
        $.get()
        audioElement.addEventListener("load", function() {
          audioElement.Play()
        }, true)

        // that.controller.changeColor()
        // that.controller.changeSize()
      })
    })
  }
}
