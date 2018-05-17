// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/students", function(req, res) {
    var query = {};
    if (req.query.teacher_id) {
      query.TeacherId = req.query.teacher_id;
    }

    db.Student.findAll({
      where: query,
      include: [db.Teacher]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/students/:id", function(req, res) {
    db.Student.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Teacher]
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // POST route for saving a new post
  app.post("/api/students", function(req, res) {
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/students/:id", function(req, res) {
    db.Student.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // PUT route for updating posts
  app.put("/api/students", function(req, res) {
    db.Student.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
};
