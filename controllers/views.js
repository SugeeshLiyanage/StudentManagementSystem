const path = require("path");
const router = require('express').Router();
const db = require("../models");


router.get('/', function(req, res){
  res.render('index');
});


router.get('/index', function(req, res){
  res.render('index');
});



router.get('/parent', function(req,res){
  res.render('parent');
});


router.get('/student', function(req, res){
  res.render('student');
});



module.exports=router;
