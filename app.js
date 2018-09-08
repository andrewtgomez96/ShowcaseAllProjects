const express = require('express');
const path = require('path');
var makeFullScreen = require('./fullScreenAPI');

//init app
const app = express();

//load view engine
app.use(express.static(__dirname + '/views'));

//home route
app.get('/', function(req, res){
    res.render('index');
   // makeFullScreen();
});

//start server
app.listen(3000,function(){
    console.log('server started on port 3000');
});