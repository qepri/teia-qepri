const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// Your other Express middleware and routes...

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
