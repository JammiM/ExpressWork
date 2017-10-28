
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

//  bodyParser middleware
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


//  Set static path
app.use(express.static(path.join(__dirname, 'public')));


//  home page
app.get('/',function (request, response) {
  response.send(person);
});

app.listen(3000, function () {
  console.log("Server running on port 3000...");
});
