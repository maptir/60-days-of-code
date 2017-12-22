$(() => {
  const dict = ['apprehensive', 'barricade', 'condition', 'dictionary', 'fragile', 'grueling', 'habitation', 'illuminate',
    'jostle', 'kindle', 'luminous', 'materialize', 'outlandish', 'plenteous', 'question', 'restaurant',
    'seperate', 'turtle', 'umbrella', 'versatile', 'weather', 'xray', 'yoyo', 'zepalz'
  ]


  const randomWord = () => {
    let random = dict[Math.floor((Math.random() * (dict.length)))]
    for (let i = 7; i > 0; i--) {
      $('#used').append('_ ')
    }
    for (let i = 0; i < random.length; i++) {
      if (random.includes(random[i]))
        $('#answer').append('_ ')
    }
    return random;
  }

  const word = randomWord();
  let used = "_".repeat(word.length)
  let answer = "_".repeat(word.length)
  let left = 8

  const updateUI = () => {
    $('#hangman').attr('src', `picture/${left}.png`)
    $('#left').html(left)
    $(`#used`).html('')
    $('#answer').html('')
    for (let i = 0; i < answer.length; i++) {
      $('#answer').append(answer[i] + " ")
    }
    for (let i = 0; i < 7; i++) {
      $('#used').append(used[i] + " ")
    }
  }

  console.log(word);
  $(document).on('keydown', () => {
    let key = String.fromCharCode(event.keyCode).toLowerCase()

    if (event.keyCode >= 65 && event.keyCode <= 90) {
      if (word.includes(key)) {
        let newAnswer = ""
        for (let i = 0; i < word.length; i++) {
          if (word[i] === key) newAnswer += key
          else newAnswer += answer[i]
        }
        answer = newAnswer
      } else if (!used.includes(key)) {
        used = used.substring(0, 8 - left) + key + used.substring((8 - left) + 1)
        left--
      }

      updateUI(key);

      if (answer === word) {
        alert(`You won!! The Word is ${word}`)
        location.reload()
      } else if (left == 0) {
        alert(`You lose!! The Word is ${word}`)
        location.reload()
      }
    }
  })
})
