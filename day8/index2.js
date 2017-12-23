$(() => {
  let root = "https://ske-minimart.herokuapp.com/api";

  $('#post').on('click', () => {
    $.ajax({
        url: root + '/add',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          name: $('#name-input').val(),
          volume: $('#volume-input').val() + "ml",
          cost: parseInt($('#cost-input').val()),
          OE: $('#oe-input').val() === "true" ? true : false,
          shelf_num: parseInt($('#shelf-input').val()),
          img: $('#img-input').val()
        })
      })
      .done(function() {
        console.log("success");
      })
      .fail(function(response) {
        $('#error').html(response.responseText)
        $('.alert').toggleClass('d-none');
      })
      .always(function() {
        console.log("complete");
      });
  })

  $('#list').on('click', () => {
    window.location = 'index.html'
  })
})
