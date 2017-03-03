var React = require("react");
module.exports = React.createClass({

    getInitialState: function() {
        return {"answered": 0, "correct": 0};
    },
    handleAnswer: function(correct) {
      this.setState({"answered": this.state.answered+1});
      if(correct) {
        this.setState({"correct": this.state.correct+1});
      }
    },
    render: function(element,container) {
      var total = this.props.material.configuration.numberOfQuestions;
			if(this.state.answered == total) {
				return <div>You got {this.state.correct} right out of {total} questions</div>
			}
      
      var activity = React.createElement(this.props.questionRenderer, {listenerFunction: this.handleAnswer, material: this.props.material, problemGenerator: this.props.problemGenerator , grade: this.props.grade});
			return <div>{activity}</div>;
    }
  });
