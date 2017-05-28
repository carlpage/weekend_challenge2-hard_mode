var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log('server is up on 3000');
});

app.get('/', function(req, res) {
  console.log('base url hit');
  // send file at resolved path
  res.sendFile(path.resolve("index.html"));
}); //end base url

app.post('/resultNumber', function(req, res) {
  //try{
  console.log('resultNumber accessed: ', req.body);
  var number = req.body;
  console.log(number);
  var returnEval = numberEvaluation(number);
  console.log(returnEval);
  res.end(returnEval.toString());
//}catch(error){
  //console.log(JSON.stringify(error,'','    '));
//}
});

function numberEvaluation(obj) {
  return eval(obj.input);
}
