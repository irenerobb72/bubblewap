import $ from 'jquery'

function listen() {
  let that = this
  $(() => {
    $('.circles').click(function(e) {
      console.log(e)
      var circle = $(e.target)
      circle.css('fill', '#FFD700')
    })
  })
  span = document.getElementById("thecircles")
  span.innerHTML = circles
}
