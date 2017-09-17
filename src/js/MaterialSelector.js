import React from 'react'

import { Link } from 'react-router'

var material = require("./material.json");

const MaterialSelector = React.createClass({
  
  render() {
      var grade = this.props.params.grade;
      var links = [];
      var gradeData = material.grades[grade].exercises;

      for(var i=0; i<gradeData.length; i++) {
          var gradeRef = "/exercises/"+grade+"/"+i;
          var name = gradeData[i].name;
        links.push(<div key={gradeRef}><Link to={gradeRef}>{name}</Link></div>)
      }
    return (
        <div>
            {links}
        </div>
    )
  }
})

module.exports = MaterialSelector