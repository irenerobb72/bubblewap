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

        that.controller.addSound()

      })
    })
  }
}
