import $ from 'jquery'

export class Model {
  constructor() {
    this.counter = 0
    this.board = $('.circles').css('fill', '#FF00FF')
    // var circle = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    }
  changeColor() {
    this.counter++
  }
  changeSize() {
  }
}
