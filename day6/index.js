$(() => {
  const dict = ['apprehensive', 'barricade', 'condition', 'dictionary', 'fragile', 'grueling', 'habitation', 'illuminate',
                'jostle', 'kindle', 'luminous', 'materialize', 'outlandish', 'plenteous', 'question', 'restaurant',
                'seperate', 'turtle','umbrella','versatile','weather','xray','yoyo','zepalz']

  const randomWord = () => {
    let random = dict[Math.floor((Math.random() * (dict.length)))]
    for (var i = 7; i > 0; i--) {
      $('#used').append(`<span id="used${i}">_ </span>`)
    }
    for (var i = 0; i < random.length; i++) {
      if (random.includes(random[i]))
        $('#answer').append(`<span class="ans${random.indexOf(random[i])}">_ </span>`)
    }
    return random;
  }

  const word = randomWord();
  let used = ""

  $(document).on('keydown', () => {
    var key = event.key
    var left = $('#left').html() - 1

    if (event.keyCode >= 65 && event.keyCode <= 90) {
      if (word.includes(key)) {
        $(`.ans${word.indexOf(key)}`).html(key + ' ')
      } else if (!used.includes(key)) {
        used += key
        $('#hangman').attr('src', `picture/${left}.png`)
        $('#left').html(left)
        $(`#used${left}`).html(key + ' ')
      }

      if (!$('#answer').html().includes('_')) {
        alert(`You won!! The Word is ${word}`)
        location.reload()
      } else if (left == 0) {
        alert(`You lose!! The Word is ${word}`)
        location.reload()
      }
    }
  })

})
