// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static(path.join(__dirname, '/views/')));
app.use(express.static('./public'));

// Routes
require("./routes/api-routes.js")(app);

// creating a view engine with Handlebars
var exphbs = require('express-handlebars');

// sets Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var viewController=require('./controllers/views.js');


app.use(viewController);
// index page
// app.get('/', function(req, res) {
//     db.Student.findAll({
//         // need to do something her to feed jquery or handlebars
//     }).then(function(dbStudents) {
//         // console.log(dbStudents)
//         console.log("server .get promise");
//         console.log(dbStudents);
//         res.render("index", { student_db: dbStudents });
//     });
// });
//
// app.get('/parent', function(req, res) {
//     db.Student.findAll({
//         // need to do something her to feed jquery or handlebars
//     }).then(function(dbStudents) {
//         // console.log(dbStudents)
//         console.log("server .get promise");
//         console.log(dbStudents);
//         res.render("parent", { student_db: dbStudents });
//     });
// });


//  teachers page

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
