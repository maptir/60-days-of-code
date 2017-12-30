const express = require('express');
const ip = require('ip');
const bodyParser = require('body-parser');
const posts = require('./posts');

const port = 1975
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(express.static(__dirname + '/publics'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  const context = {
    title: 'SANTIP',
    header: 'Welcome to SANTIP',
    message: `There is ${posts.length} topics`,
    posts
  }
  res.render('home', context)
})

app.get('/createTopic', (req, res) => {
  res.render('addTopic')
})

app.post('/addtopic', (req, res) => {
  posts.push({
    id: posts.length,
    topic: req.body.topic,
    user: req.body.user,
    message: req.body.message,
    likes: 0,
    comments: []
  })
  res.redirect('/')
})

app.post('/addcomment', (req, res) => {
  posts[req.body.id].comments.push({
    user: req.body.user,
    likes: 0,
    message: req.body.message
  })
  res.redirect(`/posts/${req.body.id}`)
})

app.post('/addliketopic', (req, res) => {
  posts[req.body.id].likes++
  const liketopic = {
    like: posts[req.body.id].likes
  }
  res.send(liketopic)
})

app.post('/addlikecomment', (req, res) => {
  posts[req.body.id].comments[req.body.commentid].likes++
  const likecomment = {
    like: posts[req.body.id].comments[req.body.commentid].likes
  }
  res.send(likecomment)
})

app.get('/posts/:id', (req, res, next) => {
  const id = req.params.id
  const post = posts[id]
  if (post) res.render('post', post)
  else next()
})

app.get('*', (req, res) => {
  res.status(404).send('404 PAGE NOT FOUND')
})

app.listen(port, () => {
  console.log(`Server is started on ${ip.address()} : ${port}`);
})
