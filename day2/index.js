$(() => {
  let point = 50
  let scores = {
    str: 0,
    def: 0,
    int: 0,
    lux: 0
  }

  const update = (name, variableName) => {
    $(name).width(scores[variableName] * 2 + '%')
    $(name).html(scores[variableName])
    $('#sp').html(point)
  }

  const setup = (name) => {
    $(`#${name}-btn1`).on('click', () => {
      if (scores[name] > 0) {
        scores[name]--;
        point++;
      }
      update(`#${name}-pbar`, name)
    })

    $(`#${name}-btn2`).on('click', () => {
      if (point > 0) {
        scores[name]++;
        point--;
      }
      update(`#${name}-pbar`, name)
    })
  }

  $('#random').on('click', () => {
    point = 50
    scores.str = Math.floor((Math.random() * (point)))
    scores.def = Math.floor((Math.random() * (point -= scores.str)))
    scores.int = Math.floor((Math.random() * (point -= scores.def)))
    scores.lux = 50 - (scores.str + scores.def + scores.int)

    update('#str-pbar', 'str')
    update('#def-pbar', 'def')
    update('#int-pbar', 'int')
    update('#lux-pbar', 'lux')
    $('#sp').html(0)
  })

  setup('str')
  setup('def')
  setup('int')
  setup('lux')

})
