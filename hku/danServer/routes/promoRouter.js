const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()
promoRouter.use(bodyParser.json())

promoRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
  }).get((req, res, next) => {
    // handle get requests
    res.end('Will send all the promotions to you')
  }).post((req, res, next) => {
    // handle post request
    res.end(
      `Will add the promotions: ${req.body.name} with details ${req.body.description}`
    )
  }).put((req, res, next) => {
    // handle put request
    res.statusCode = 403 // operation not supported
    res.end(`PUT operation not supported on /promotions`)
  }).delete((req, res, next) => {
    // handle put request
    res.end(`Deleting all the promotions`);
  })

promoRouter.route('/:promoId').get((req, res, next) => {
  // handle get requests
  res.end(`Will send details of the promotion ${req.params.promotId}`);
}).post((req, res, next) => {
  // handle post request
  res.statusCode = 403; // operation not supported
  res.end(`POST operation not supported on /promotions/${req.params.promotId}`);
}).put((req, res, next) => {
  // handle put request
  res.write(`Updating details of the promotion: ${req.params.promotId}\n`);
  res.end(
    'Will Update the promotion: ' +
    req.body.name +
    ' with details ' +
    req.body.description
  );
}).delete((req, res, next) => {
  // handle Delete request
  res.end('Deleting then promotion: ' + req.params.promotId);
});

module.exports = promoRouter