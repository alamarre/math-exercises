var React = require("react");
var MaterialSelector = require("./MaterialSelector");

module.exports = React.createClass({
    getInitialState: function() {
        return {"grade": -1, "grades": 8};
    },
    componentDidMount: function(){
      //var node = this.getDOMNode();

    },
		setGrade: function(grade) {
			this.setState({"grade": grade}, function() {});
		},
    render: function(element,container) {
      var classes ="hello there";
	    var cells = [];
	    for (var i =1; i<= this.state.grades; i++) {
	      cells.push(<div onClick={this.setGrade.bind(this, i)} key={'grade' +i}>Grade {i}</div>);
	    }
	    var grades = <div>{cells}</div>;
			var gradeChooser = null;
      return <div>
        <div className={this.state.grade > 0 ? "hidden" : ""}>
            {grades}
        </div>
        { this.state.grade > 0
					?  <MaterialSelector grade={this.state.grade} />
					: null
				}
      </div>;
    }
  });
