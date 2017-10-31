
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

var app = express();

//  bodyParser middleware


//Parses json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var person = [{
  name : 'Jeff',
  age : 4
},
{
  name : 'Jeff',
  age : 4
}
,
{
  name : 'Jeff',
  age : 4
}];


//  Sets a static path where all the files are stored.
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

//  home page
//app.get('/',function (request, response) {
//  response.send(person);
//});

app.listen(3000, function () {
  console.log("Server running on port 3000...");
});
