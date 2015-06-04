module.exports = function(app) {
  var express = require('express');
  var carRouter = express.Router();
  var car = [
    {id: 1, make: "ford", model: 'Fiesta'},
    {id: 2, make: "toyata", model: 'Yaris'}
  ];
  carRouter.get('/', function(req, res) {
    res.send(
      car
    );
  });

  carRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  carRouter.get('/:id', function(req, res) {
    var result = car.filter(function(obj){
      return obj.id == req.url.replace('/', '');
    });
    console.log(">>>>: req:", result);
    res.send(
      result[0]
    );
  });

  carRouter.put('/:id', function(req, res) {
    res.send({
      'car': {
        id: req.params.id
      }
    });
  });

  carRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/car', carRouter);
};
