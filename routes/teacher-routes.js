var db = require("../models");

module.exports = function(app) {
  app.get("/api/teachers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Teacher.findAll({
      include: [db.Student]
    }).then(function(dbTeacher) {
      res.json(dbTeacher);
    });
  });

  app.get("/api/students/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Teacher.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Student]
    }).then(function(dbTeacher) {
      res.json(dbTeacher);
    });
  });

  app.post("/api/teachers", function(req, res) {
    db.Teacher.create(req.body).then(function(dbTeacher) {
      res.json(dbTeacher);
    });
  });

  app.delete("/api/teachers/:id", function(req, res) {
    db.Teacher.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTeacher) {
      res.json(dbTeacher);
    });
  });

};
