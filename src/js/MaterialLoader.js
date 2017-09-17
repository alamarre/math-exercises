import React from 'react'

import { Link } from 'react-router'

var material = require("./material.json");
var renderers = {"multiple choice": require("./activities/MultipleChoiceRenderer")};

for(var grade in material.grades) {
    var gradeData = material.grades[grade].exercises;
    for(var i=0; i<gradeData.length; i++) {
        gradeData[i].actualSource = require("./material/grades/"+grade+"/"+gradeData[i].source);
        gradeData[i].actualMode = require("./gamemodes/"+gradeData[i].mode);
    }
    
}

const MaterialLoader = React.createClass({
  
  render() {
      var grade = this.props.params.grade;
      var materialNumber = this.props.params.material;;
      var links = [];
      var gradeData = material.grades[grade].exercises;
      var materialData = gradeData[materialNumber];

      var result = React.createElement(materialData.actualMode, {material: materialData, questionRenderer: renderers[materialData.type], problemGenerator: materialData.actualSource , grade: grade});
    return (
        <div>
            {result}
        </div>
    )
  }
})

module.exports = MaterialLoader