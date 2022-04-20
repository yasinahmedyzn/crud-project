const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {

  res.send('This is homepage')
  // res.status(500)
  // res.json({"yasin":25})
})

router.get('/blog', (req, res) => {
  res.send('This is blogpage')

})
router.get('/about', (req, res) => {
  res.send('This is aboutpage')

})
router.get('/hello/:id', (req, res) => {
  const id = req.params.name
  res.send('Hello World!'+ id)

})

module.exports = router
