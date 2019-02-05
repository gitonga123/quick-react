const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method`)
  if (req.method == 'GET') {
    var fileUrl
    if (req.url == '/') {
      fileUrl = '/index.html'
    } else {
      fileUrl = req.url
    }

    var filePath = path.resolve('./' + fileUrl)

    const fileExt = path.extname(filePath);
    if (fileExt == '.html') {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html')
          res.end('<html><body><h1>Error 404 </h1></body></html>')
        } else {
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html')
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      })
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      res.end('<html><body><h1>Error 404</h1><h3>File Not an Html File</h3></body></html>')
      return;
    }
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>Error 503 - action not supported</h1></body></html>')
    return;
  }
})

server.listen(port, hostname, () => {
  console.log(`Listening port ${port} at host http://${hostname}`)
})