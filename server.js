const express = require('express')
const path = require('path')
const dotenv = require('dotenv')


const app = express()

dotenv.config({path : 'config.env'})
const port = process.env.port || 8080

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
  // res.status(500)
  // res.json({"yasin":25})
})
app.use(express.static(path.join(__dirname, "views")))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
