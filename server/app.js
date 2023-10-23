// require('dotenv').config()
const express = require('express')
const path = require('path')
const serverConfig = require('./config/serverConfig')

const app = express()
// разобраться с env!!!!!!!!!!!!!!!!!!!!!!!!!!!! заменил const PORT
const PORT = 4000
serverConfig(app)
const indexRoute = require('./routes/index.route')

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', indexRoute)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
app.listen(PORT, () => console.log(`Наш сервер пашет на ${PORT}  порту`))
