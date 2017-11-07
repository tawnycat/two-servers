var http = require("http");

var portOne = 7000;
var portTwo = 7500;

http.createServer(compliments).listen(7000);
http.createServer(insults).listen(7500);

function compliments (req, res) {
	res.end("Your hair looks nice today!");
};

function insults (req, res) {
	res.end("You have bad breath.");
};