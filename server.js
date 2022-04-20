const express = require('express')
const path = require('path')
const dotenv = require('dotenv')


const app = express()

dotenv.config({path : 'config.env'})
const port = process.env.port || 8080

//connect routes

const routesj = require('./server/router/routes')
app.use('/routes', routesj)

app.use(express.static(path.join(__dirname, "views")))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
