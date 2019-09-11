	$(document).ready(function() {	

		var score, userIQ;
		var x = prompt("Where does the Pope live?");
		var correctAnswer = "Vatican";
		if (x === correctAnswer) {
			alert("Correct!");
		}
		else {
			score--;
			userIQ = "problematic";
			alert("Incorrect");
		}
		var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
		alert(cities);
		var mixedArray = [1, "Bob", "Now is", true];
	mixedArray.pop(); // remove
	mixedArray.push("Ronan","Alex"); //incluir 
	alert(mixedArray[4]);
	alert(mixedArray[3]);

	'use strict';
	console.log('main.js loaded');
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	
	var tool = new Tool();
	var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
tool.onMouseDown = function(event) {
var c = Shape.Circle(event.point, 20);
if (event.point.x%2 ===0)
c.fillColor = 'green';
else
c.fillColor = 'pink';
};

	paper.view.draw();
});