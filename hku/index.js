const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// handle all requests
app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

// handle get requests
app.get("/dishes", (req, res, next) => {
  res.end("Will send all the dishes to you");
});

// handle post request
app.post("/dishes", (req, res, next) => {
  res.end(
    `Will add the dishes: ${req.body.name} with details ${req.body.description}`
  );
});

// handle put request
app.put("/dishes", (req, res, next) => {
  res.statusCode = 403; // operation not supported
  res.end(`PUT operation not supported on /dishes`);
});

// handle put request
app.delete("/dishes", (req, res, next) => {
  res.end(`Deleting all the dishes`);
});

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
app.put("/dishes/:dishId", (req, res, next) => {
  res.write(`Updating details of the dish: ${req.params.dishID}\n`);
  res.end(
    "Will Update the dish: " +
      req.body.name +
      " with details " +
      req.body.description
  );
});

// handle put request
app.delete("/dishes/:dishId", (req, res, next) => {
  res.end(`Deleting the Dish ${req.body.dishId}`);
});

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<html><body><h1>This is an express server</h1></body></html>`);
});

const server = http.createServer(app).listen(port, hostname, () => {
  console.log(`Listening to http://${hostname}:${port}`);
});
