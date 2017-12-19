$(() => {
  const query = decodeURIComponent(window.location.search.substring(1));
  const querySplit = query.split('&')
  const scores = {}
  querySplit.forEach((item)=>{
    let score = item.split('=')
    scores[score[0]] = score[1]
  })

  const update = (name, variableName) => {
    $(name).width(scores[variableName] * 2 + '%')
    $(name).html(scores[variableName])
  }

  update('#str-pbar', 'str')
  update('#def-pbar', 'def')
  update('#int-pbar', 'int')
  update('#lux-pbar', 'lux')
})
