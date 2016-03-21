import $ from 'jquery'

$(() => {
  let that = this
  $('.circles').click(function(e) {
    var circle = $(e.target)
    circle.css('fill', '#A020F0')

    var audioElement = document.createElement('audio')
      audioElement.setAttribute('src', 'audio/fettywap.mp3')
      audioElement.setAttribute('autoplay', 'autoplay')
      $.get()
      audioElement.addEventListener("load", function() {
        audioElement.Play()
    }, true)
  })
})
