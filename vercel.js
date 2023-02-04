const express = require('express')
const app = express()

app.use('/*', (req, res) => {
  res.redirect('/index.html')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
