import $ from 'jquery'

export class Model {
  constructor() {
    this.counter = 0
    this.board = $('circle').css('fill', '#dda0dd')
    var circle = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    }
  changeColor(circleList) {
    this.counter++
    if (this.counter === 1) {
      $('circle').each(function(circle) {
        $(circle).css('fill', '#40e0d0')
      })
    }
  }
  changeSize() {

  }
  addSound() {

  }
}
