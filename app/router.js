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
        console.log(circle)
        circle.css('fill', 'blue')

        // that.controller.changeColor()
        // that.controller.addSound()
        // that.controller.changeSize()
      })
    })
  }
}
