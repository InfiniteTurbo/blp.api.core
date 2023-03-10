const express = require('express')
const app = express()
const port = 12589

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`The Blue Light Paradise API is listening on port ${port}!`)
})
