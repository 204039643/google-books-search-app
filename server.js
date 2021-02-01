const mongoose = require('mongoose')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App is running on loccalhost port: ${PORT}`)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-books-app',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

const connection = mongoose.connection

connection.on('connected', () => {
  console.log('Mongoose connection successful!')
})
connection.on('error', err => {
  console.log('Mongoose connection error: ', err)
})

app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})
