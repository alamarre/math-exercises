import React from 'react'

import { Link } from 'react-router'

var material = require("./material.json");

const GradeSelector = React.createClass({
  
  render() {
      var links = [];
      for(var grade in material.grades) {
          var gradeRef = "/grades/"+grade;
          links.push(<div key={gradeRef}>
              <Link to={gradeRef} >Grade {grade}</Link> 
              </div>)
      }

      var body = this.props.children || <div>{links}</div>;
    return (
        <div>{body}</div>
    )
  }
})

module.exports = GradeSelector