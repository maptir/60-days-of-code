$(() => {
  let emoji = [
    '💩',
    '🐝',
    '🍙',
    '🐒',
    '🌚',
    '🧘'
  ]

  let card = emoji.concat(emoji);
  let isOpen = 0;
  let score = 0;

  const setTimeOutBtn = (btn, index) => {
    setTimeout(() => {
      $(btn).css('background-color', '#dc3545')
      $(btn).attr('disabled', false)
      $(`#card${index}`).html(index)
    }, 1000)
  }

  const init = () => {
    // Shuffle card
    for (let i = 0; i < card.length; i++) {
      let rand = i + Math.floor(Math.random() * card.length - i)
      let temp = card[i]
      card[i] = card[rand]
      card[rand] = temp
    }

    // Create a card
    for (let i = 1; i <= emoji.length * 2; i++) {
      $('#table').append(`<button class="btn btn-danger border border-white" id="card-btn${i}">
                            <h2 id="card${i}">${i}</h2>
                          </button>`)
      if (i % 4 == 0)
        $('#table').append('<br>')

      // Card button listener
      $(`#card-btn${i}`).on('click', () => {
        $(`#card-btn${i}`).css('background-color', 'black')
        $(`#card${i}`).html(card[i - 1])
        $(`#card-btn${i}`).attr('disabled', true)
        if (isOpen) {
          if (card[i - 1] !== card[isOpen - 1]) {
            setTimeOutBtn(`#card-btn${i}`, i)
            setTimeOutBtn(`#card-btn${isOpen}`, isOpen)
          } else {
            $('#score').html(++score)
          }
          isOpen = 0
        } else {
          isOpen = i
        }
      })
    }
  }

  init();




})
