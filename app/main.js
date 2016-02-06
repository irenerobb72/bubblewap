import $ from 'jquery'

  $(() => {
    let that = this
    $('.circles').click(function(e) {
      var circle = $(e.target)
      circle.css('fill', '#FFD700')
  })

})
