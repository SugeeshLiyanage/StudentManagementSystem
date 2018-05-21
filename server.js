/// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var passport = require('passport')
var session = require('express-session')
var bodyParser = require("body-parser");
var env = require('dotenv').load();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// For Passport

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized:true
})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

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
