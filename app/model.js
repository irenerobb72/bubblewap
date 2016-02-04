import $ from 'jquery'

export class Model {
  constructor() {
    this.counter = 0
    })
    // var circle = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    }
  createBoard() {
    var circle = svg.selectAll('circle')
    circle.style('fill', 'steelblue')
  }
  changeColor() {
    this.counter++

  }
  changeSize() {

  }
  addSound() {
    var audioElement = document.createElement('audio')
    audioElement.setAttribute('src', 'audio/fettywap.mp3')
    audioElement.setAttribute('autoplay', 'autoplay')
    $.get()
    audioElement.addEventListener("load", function() {
      audioElement.Play()
    }, true)
  }
}
