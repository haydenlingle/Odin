require('dotenv').config();
const http = require('http')
const fs = require("fs");

const port = process.env.PORT

const server = http.createServer((req, res) => {
  console.log(req.url)
  const path = req.url
  if(path == '/'){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./index.html', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
      }
      res.write(data)
      res.end()
    })
  } else if (path == '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./about.html', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
      }
      res.write(data)
      res.end()
    })
  } else if (path == '/contact') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./contact-me.html', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
      }
      res.write(data)
      res.end()
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    fs.readFile('./404.html', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
      }
      res.write(data)
      res.end()
    })
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})