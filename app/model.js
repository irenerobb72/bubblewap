import $ from 'jquery'

export class Model {
  constructor() {
    this.counter = 0
    this.board = $('.circles').css('fill', '#dda0dd')
    // var circle = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    }
  changeColor(circleList) {
    this.counter++
    if (this.counter === 1) {
      $('.circles').each(function(circle) {
        $('.one').css('fill', '#40e0d0'),
        $('.two').css('fill', '#40e0d0'),
        $('.three').css('fill', '#40e0d0'),
        $('.four').css('fill', '#40e0d0'),
        $('.five').css('fill', '#40e0d0'),
        $('.six').css('fill', '#40e0d0'),
        $('.seven').css('fill', '#40e0d0'),
        $('.eight').css('fill', '#40e0d0'),
        $('.nine').css('fill', '#40e0d0'),
        $('.ten').css('fill', '#40e0d0'),
        $('.eleven').css('fill', '#40e0d0'),
        $('.twelve').css('fill', '#40e0d0'),
        $('.thirteen').css('fill', '#40e0d0'),
        $('.fourteen').css('fill', '#40e0d0'),
        $('.fifteen').css('fill', '#40e0d0'),
        $('.sixteen').css('fill', '#40e0d0'),
        $('.seventeen').css('fill', '#40e0d0'),
        $('.eighteen').css('fill', '#40e0d0'),
        $('.nineteen').css('fill', '#40e0d0'),
        $('.twenty').css('fill', '#40e0d0')
      })
    }
  }
  changeSize() {

  }
  addSound() {

  }
}
