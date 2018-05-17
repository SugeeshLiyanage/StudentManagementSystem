//******************************************
//This file offers a set of routes for displaying and saving data to the db
//******************************************

//Dependencies
//Grabbing our models

var db = require("../models");

//Routes
//**********************************************
module.exports = function(app) {

    //Get routes for getting all of the students
    app.get("/api/student", function(req, res) {

        db.Student.findAll({

        }).then(function(dbStudents) {
            //console.log(dbStudents)
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            res.render("index", { student_db: dbStudents, first: dbStudents.first, last: dbStudents.last, behavior: dbStudents.behavior, date: dbStudents.date });           
        });
        // return dbStudents;
    });

    app.post("/api/student", function(req, res) {
        return db.Student.create({
            first: req.body.first,
            last: req.body.last,
            behavior: req.body.behavior,
            date: new Date()
        }).then(function(dbStudents) {
            // console.log(dbStudent);
            var jsonDate = (new Date()).toJSON();
            console.log(jsonDate);
            console.log("we be posting")
            res.render("index", { student_db: dbStudents, first: dbStudents.first, last: dbStudents.last, behavior: dbStudents.behavior, date: dbStudents.date });
          });
    });
    //Delete route for deleting Students. you can access the Student's id in req.params.id
    app.delete("/api/student", function(req, res) {
        db.Student.destroy({
            where: {

            }
        });
    });
    //Delete from post where status = 'inactive'
    //PUT route for updating todos
    app.put("/api/student", function(req,res) {

    });
};
