var Number = require("../../../utilities/Number");

function generateProblem() {
	var first = Number.randomNumber(1, 20);
    var second = Number.randomNumber(1, 20);

    var bigger = first > second ? first : second;
    var smaller = first > second ? second : first;

	return {question: bigger + " - " + smaller, answer: bigger - smaller};
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