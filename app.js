
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');
const expressValidator = require('express-validator');

var app = express();
var cutomers = [{fn:'james'},{fn:'jack'},{fn:'jamie'}];

//  BodyParser middleware (parses json data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




//  Sets a static paths where all the files are stored.
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('assets'));
//app.use(express.static(__dirname + '/public'));
//app.use('/public', express.static(path.join(__dirname , '/public')));


//  Express Validator Middleware
app.use(expressValidator());



//  Configuring the pug middleware
app.set('views', './views');
app.set('view engine', 'pug');




app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!', users: cutomers })
});


// Handler for the form post request
app.post('/users/add', function (req, res) {

  req.checkBody('firstName', 'First name is required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
      console.log('there was a error');
      res.render('index', { title: 'Hey', message: 'Hello there!', users: cutomers, errors: errors });
  }else {
    var newUser = { fn: req.body.firstName };
  }
    console.log('sucess');
});



app.listen(3000, function () {
  console.log("Server running on port 3000...\nPress Ctrl & C to end the server.");
});
