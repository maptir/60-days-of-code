$(() => {

  $('.answer').on('click', () => {
    alert('Correct !!')
  })

  $('#trick').on('mouseover', () => {
    $('#trick').css({
      position: 'absolute',
      top: Math.floor(Math.random() * 90) + '%',
      left: Math.floor(Math.random() * 90) + '%'
    })
  })

})
