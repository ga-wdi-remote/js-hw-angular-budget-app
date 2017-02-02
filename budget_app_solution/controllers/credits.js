var Credit = require('../models/credit');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    Credit.find(function(error, credit) {
      if(error) res.status(404).send(error);
      res.status(200).send(credit);
    });
});
// // GET
// function getAll(request, response) {
//   Credits.find(function(error, credit) {
//     if(error) response.status(404).send(error);
//
//     response.status(200).send(credit);
//   }).select('-__v');
// }
//

// POST: ADD A NEW BUDGET AMOUNT
router.post("/", function(req, res){
  var credit = new Credit(req.body);
  console.log(credit);

  credit.save(function(error) {
    if(error) res.status(500).send(error);
    res.status(201).send(credit);
  });
});




//
// // GET
// function getCredits(request, response) {
//   var id = request.params.id;
//
//   Credits.findById({_id: id}, function(error, credit) {
//     if(error) response.status(404).send(error);
//
//     response.status(200).send(credit);
//   }).select('-__v');
// }
//
// function updateCredits(request, response) {
//   var id = request.params.id;
//
//   Credits.findById({_id: id}, function(error, credit) {
//     if(error) response.status(404).send(error);
//
//     if(request.body.name) credit.name = request.body.name;
//     if(request.body.lightsaber) credit.lightsaber = request.body.lightsaber;
//
//     credit.save(function(error) {
//       if(error) response.status(500).send(error);
//
//       response.status(200).send(credit);
//     });
//   }).select('-__v');
// }
//
// function removeCredits(request, response) {
//   var id = request.params.id;
//
//   Credits.remove({_id: id}, function(error) {
//     if(error) response.status(404).send(error);
//
//     response.status(200);
//   }).select('-__v');
// }

module.exports = router;
