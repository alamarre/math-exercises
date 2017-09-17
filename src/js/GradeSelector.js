import React from 'react'

import { Link } from 'react-router'

var material = require("./material.json");

const GradeSelector = React.createClass({
  
  render() {
      var links = [];
      for(var grade in material.grades) {
          var gradeRef = "/grades/"+grade;
          var image = require("svg-url-loader?limit=1024!../images/"+material.grades[grade].image);
          links.push(<div className="grade-selector" key={gradeRef}>
              <Link to={gradeRef} ><img width="100px" src={image} /></Link> 
              </div>)
      }

      var body = this.props.children || <div>
          <h1>Select a Grade</h1>
        {links}
      </div>;
    return (
        <div>{body}</div>
    )
  }
})

module.exports = GradeSelector