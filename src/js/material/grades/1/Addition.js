var Number = require("../../../utilities/Number");

function generateProblem() {
	var first = Number.randomNumber(1, 10);
    var second = Number.randomNumber(1, 10);

	return {question: first + " + "+second, answer: first + second};
}

module.exports.generateProblem = generateProblem;

module.exports.generateMultipleChoiceProblem = function(count) {
	count--;
	var otherAnswers = [];
	var problem = generateProblem();
	for(var i=0; i < count; i++) {
		while(true) {
			var current = Number.randomNumber(1, 20);
			if(current != problem.answer && !otherAnswers.includes(current)) {
				otherAnswers.push(current);
				break;
			}
		}
	}
	problem.otherAnswers = otherAnswers;
	return problem;
}