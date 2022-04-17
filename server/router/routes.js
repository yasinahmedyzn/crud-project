
app.get('/, (req, res) => {
  res.send('This is homepage')
  // res.status(500)
  // res.json({"yasin":25})
})

app.get('/blog, (req, res) => {
  res.send('This is blogpage')

})
app.get('/about, (req, res) => {
  res.send('This is aboutpage')

})
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+ req.params.name)

})
