
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

var app = express();

//  bodyParser middleware
//  Parses json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




//  Sets a static paths where all the files are stored.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('assets'));




//  Configuring the pug middleware
app.set('views', './views');
app.set('view engine', 'pug');




app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})





app.listen(3000, function () {
  console.log("Server running on port 3000...\n Press Ctrl & C to end the server.");
});
