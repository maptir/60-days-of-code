$(() => {
  let root = "http://localhost:1975";

  const getData = () => {
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
      .fail(function(response) {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
  }

  $('#refresh').on('click', () => {
    getData();
  })

  $('#admin').on('click', () => {
    window.location = 'index2.html'
  })

  getData();

})
