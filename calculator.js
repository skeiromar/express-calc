
var express = require("express");
var routeHandler = require('./calculatorHandlerTesting');

var app = express();
var PORT = 8080;

app.get('/:operator/:num1/:num2', function(req, res) { 
	let result = routeHandler(req, res);
	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all");
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});