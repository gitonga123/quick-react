const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require('./routes/dishRouter');


const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/dishes', dishRouter)

app.use(express.static(__dirname + "/public"));

// handle get requests
app.get("/dishes/:dishId", (req, res, next) => {
  res.end(`Will send details of the dishes ${req.params.dishId}`);
});

// handle post request
app.post("/dishes/:dishId", (req, res, next) => {
  res.statusCode = 403; // operation not supported
  res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
});

// handle put request
app.put('/dishes/:dishId', (req, res, next) => {
  res.write(`Updating details of the dish: ${req.params.dishID}\n`);
  res.end(
    'Will Update the dish: ' +
    req.body.name +
    ' with details ' +
    req.body.description
  );
});

// handle put request
app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('Deleting dish: ' + req.params.dishId);
});

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<html><body><h1>This is an express server</h1></body></html>`);
});

const server = http.createServer(app).listen(port, hostname, () => {
  console.log(`Listening to http://${hostname}:${port}`);
});