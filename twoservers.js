var http = require("http");

var portOne = 7000;
var portTwo = 7500;

http.createServer(compliments).listen(7000);
http.createServer(insults).listen(7500);

function compliments (req, res) {

	var complimentArray = ["Your hair looks nice today!", "Cool shirt!", "You're doing great!", "Keep up the good work!"];

	var randCompliment = complimentArray[Math.floor(Math.random() * complimentArray.length)];

	res.end(randCompliment);
};

function insults (req, res) {
	var insultArray = ["You have bad breath.", "You left the house in that?", "Maybe give up.", "Not great."];

	var randInsult = insultArray[Math.floor(Math.random() * insultArray.length)];

	res.end(randInsult);
};