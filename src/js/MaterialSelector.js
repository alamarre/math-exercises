var React = require("react");
var MultipleChoiceRenderer = require("./activities/MultipleChoiceRenderer");
var activities = {"multiple choice": MultipleChoiceRenderer};

var material = require("./material.json");

function notCalled() {
  require('./material/**/*.js', { glob: true });
}

module.exports = React.createClass({


    getInitialState: function() {
        return {"material": null};
    },
    componentDidMount: function(){
      //var node = this.getDOMNode();

    },
		setMaterial: function(material) {
			this.setState({"material": material}, function() {});
		},
    render: function(element,container) {

      var grade = this.props.grade;

      var renderer = null

      if (this.state.material != null && typeof activities[this.state.material] != null) {
        var problemGenerator = require("./material/grades/"+grade+"/"+this.state.material.source+".js");
        renderer = React.createElement(activities[this.state.material.type], {material: this.state.material, problemGenerator: problemGenerator , grade: grade});
      }
      else {
        var cells = [];
        for(var i=0; i< material.grades[grade].length; i++) {
          var current = material.grades[grade][i];
          cells.push(<div onClick={this.setMaterial.bind(this, current)} key={'material' +i}>{current.name}</div>);
        }
        renderer = <div>{cells}</div>;
      }

      return <div>
        {renderer}
      </div>;
    }
  });
