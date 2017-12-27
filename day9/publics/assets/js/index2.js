$(() => {
  let root = "http://localhost:1975";

  $('#post').on('click', () => {
    $.ajax({
        url: root + '/add',
        type: 'POST',
        data: {
          name: $('#name-input').val(),
          volume: $('#volume-input').val() + "ml",
          cost: parseInt($('#cost-input').val()),
          OE: $('#oe-input').val() === "T" ? true : false,
          shelf_num: parseInt($('#shelf-input').val()),
          img: $('#img-input').val()
        }
      })
      .done(function() {
        $('#alert').addClass('alert-success')
        $('#alert').removeClass('alert-danger')
        $('#alert').removeClass('d-none')
        $('#text').html(`${$('#name-input').val()} has been add.`)
        setTimeout(() => {
          $('.alert').addClass('d-none')
        }, 2000)
      })
      .fail(function(response) {
        $('#alert').attr('alert-success', 'alert-danger')
        $('#alert').removeClass('d-none')
        $('#text').html(response.responseText)
      })
      .always(function() {
        console.log("complete");
      });
  })

  $('#list').on('click', () => {
    window.location = 'index.html'
  })
})
