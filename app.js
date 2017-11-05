
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');
const expressValidator = require('express-validator');
const mongojs = require('mongojs')

var app = express();
var users = [{fn:'james',em:'James@gmail.com'},{fn:'jack',em:'Jack@gmail.com'},{fn:'jamie',em:'Jamie@gmail.com'}];
var db = mongojs('customerapp', ['users']);

//  BodyParser middleware (parses json data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




//  Sets a static paths where all the files are stored.
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('assets'));



//  Express Validator Middleware
app.use(expressValidator());



//  Configuring the pug middleware
app.set('views', './views');
app.set('view engine', 'pug');



// This is the home page.
app.get('/', function (req, res) {

  // find everything
  db.users.find(function (err, docs) {
      // docs is an array of all the documents in mycollection
      console.log(docs);
      res.render('index', { title: 'People in database',
                            message: 'People in database',
                            users: docs });
  });
  /*
  res.render('index', { title: 'People in database',
                        message: 'People in database',
                        users: users});
                        */
});

// Handler for the form post request
app.post('/users/add', function (req, res) {

  //Checks if the input field is not Empty
  req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('lastName', 'Last name is required').notEmpty();
  req.checkBody('email', 'Enter a valid email address.').isEmail();


  // sets errors to true, if there is a errors
  var errors = req.validationErrors();

  if(errors){
      console.log('There was a error');
      // Print the error on the error page.
      res.render('error', { title: 'Errors', message: 'There was errors !', users: users, errors: errors });
  }else {

      // Creates a new object based on the form inputs
      var newUser = { fn: req.body.firstName,ln: req.body.lastName, em: req.body.email };

      db.users.insert(newUser, function (error, result) {
        if(error){
          console.log(error);
        }
        res.redirect('/');
      });

      //console.log('Success : ' + req.body.firstName + ' was successfully added.');
      // Print the Success on the Success page.
      //res.render('sucess', { title: 'Success', message: 'Successfully added !', name: 'Successfully added !' + req.body.firstName, email: req.body.email, users: users });
  }
});//app.post

app.listen(3000, function () {
  console.log("Server running on port 3000...\nPress Ctrl & C to end the server.");
});
