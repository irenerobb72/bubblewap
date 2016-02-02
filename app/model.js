import $ from 'jquery'
const circleList = {
  // 1: 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone', 'twentytwo', 'twentythree', 'twentyfour', 'twentyfive'
}
export class Model {
  constructor() {
    console.log('hiiajdf;')
    this.counter = 0
    this.board = $('.circles').css('color', 'orange')
    }
  changeColor(circleList) {
    if (circleList[this.counter]) {
      this.board.color('blue')
    }
  }
  changeSize() {

  }
  addSound() {

  }
}
