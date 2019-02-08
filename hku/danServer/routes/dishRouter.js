const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()
dishRouter.use(bodyParser.json())

dishRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
  }).get((req, res, next) => {
    // handle get requests
    res.end('Will send all the dishes to you')
  }).post((req, res, next) => {
    // handle post request
    res.end(
      `Will add the dishes: ${req.body.name} with details ${req.body.description}`
    )
  }).put((req, res, next) => {
    // handle put request
    res.statusCode = 403 // operation not supported
    res.end(`PUT operation not supported on /dishes`)
  }).delete((req, res, next) => {
    // handle put request
    res.end(`Deleting all the dishes`);
  })

dishRouter.route('/:dishId').get((req, res, next) => {
  // handle get requests
  res.end(`Will send details of the dish ${req.params.dishId}`);
}).post((req, res, next) => {
  // handle post request
  res.statusCode = 403; // operation not supported
  res.end(`POST operation not supported on /dishes/${req.params.dishId}`);
}).put((req, res, next) => {
  // handle put request
  res.write(`Updating details of the dish: ${req.params.dishID}\n`);
  res.end(
    'Will Update the dish: ' +
    req.body.name +
    ' with details ' +
    req.body.description
  );
}).delete((req, res, next) => {
  // handle Delete request
  res.end('Deleting the dish: ' + req.params.dishId);
});

module.exports = dishRouter