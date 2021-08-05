const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

const si = require('systeminformation');
app.get('/fetchStats', function (req, res) {
  const body = req.body.Body
  console.log("request made")
  res.header("Access-Control-Allow-Origin", "*"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  

si.cpu()
  .then(data =>  res.send(data))
  .catch(error => console.error(error));
})

const port = 8888
app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log(`Server started on port ${port}`)
})


