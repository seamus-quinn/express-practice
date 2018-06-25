const express = require('express');
const path = require('path');
const app = express();
const jsonInfo = require('./jsonInfo')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Time Stamp', new Date(Date.now()).toString())
  next()
}

app.use(express.static('public'));
app.use(urlLogger, timeLogger)


app.get('/json', (request, response) => {
  response.status(200).json(jsonInfo)
})

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname + '/sunsets/index.html'))
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000')
})


