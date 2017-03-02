var React = require("react");
module.exports = React.createClass({

    getInitialState: function() {
        return {"answered": 0, "correct": 0};
    },
    render: function(element,container) {

      var total = this.props.numberOfQuestions;
			if(this.state.answered == total) {
				return <div>You got {this.state.correct} right out of {total} questions</div>
			}

			return <div>{this.props.questionRenderer}</div>;
    }
  });
