import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }
  listen() {
    let that = this
    $(() => {
      $('.circles').on('click', function() {
        that.controller.changeColor()
        that.controller.addSound()
        that.controller.changeSize()
      })
    })
  }
}
