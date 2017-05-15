var db = require("../models");


module.exports = function(app) {

 	
   
  app.get("/api/burgerQ", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burs.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });
   
  app.post("/api/burgerC", function(req, res) {
  	   console.log(req.body);
    // findAll returns all entries for a table when used with no options
    db.burs.create({
       complete : req.body.burger

    }).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });








};


