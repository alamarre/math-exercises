var React = require("react");
var material = require("../material.json");
module.exports = React.createClass({

    getInitialState: function() {
			var problem = this.props.problemGenerator.generateMultipleChoiceProblem(5);
        return {"problem": problem, "choices": this.createShuffledAnswer(problem)};
    },
		selectAnswer: function(answer) {
			if(answer == this.state.problem.answer) {
				var problem = this.props.problemGenerator.generateMultipleChoiceProblem(5);
				this.setState({"problem": problem, "choices": this.createShuffledAnswer(problem)}, function(){});
			}
		},
		createShuffledAnswer: function(problem) {
			var answers = [];
			answers.push(problem.answer);
			var a = problem.otherAnswers;
			for(var i=0; i<a.length; i++) {
				answers.push(a[i]);
			}
			this.shuffle(answers);
			return answers;
		},
		shuffle: function(a) {
		    var j, x, i;
		    for (i = a.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = a[i - 1];
		        a[i - 1] = a[j];
		        a[j] = x;
		    }
		},
    componentDidMount: function(){
      //var node = this.getDOMNode();

    },
    render: function(element,container) {

      var grade = this.props.grade;

			var cells = [];
			for(var i=0; i< this.state.choices.length; i++) {
				var current = this.state.choices[i];
				cells.push(<div onClick={this.selectAnswer.bind(this, current)} key={'answer' +i}>{current}</div>);
			}
			var renderer = <div>{cells}</div>;

			return <div>
			<div>{JSON.stringify(this.state.problem.question)}</div>
			{renderer}
			</div>
        ;
    }
  });
