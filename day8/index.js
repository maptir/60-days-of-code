$(() => {
  let root = "https://ske-minimart.herokuapp.com/api";

  $('#get').on('click', () => {
    $.ajax({
        url: root + '/drinks',
        type: 'GET',
      })
      .done(function(response) {
        $('#table').html('')
        for (let i = 0; i < response.length; i++) {
          $('#table').append(`
              <tr>
                <th scope="row">${i+1}</th>
                <td>${response[i].name}</td>
                <td>${response[i].volume}</td>
                <td>${response[i].cost}</td>
                <td>${response[i].OE}</td>
                <td>${response[i].shelf_num}</td>
                <td><img width="50px" heigth="100px" class="img-fluid" src="${response[i].img}" alt=""></td>
              </tr>
            `)
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
  })

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
        alert(response.responseText)
      })
      .always(function() {
        console.log("complete");
      });
  })
})
