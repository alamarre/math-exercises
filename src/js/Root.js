var React = require('react');
var GradeSelector = require('./GradeSelector');

module.exports = React.createClass({
    getInitialState: function() {
        return {"hide": true};
    },
    componentDidMount: function(){
      //var node = this.getDOMNode();

    },
    render: function(element,container) {
      var classes ="hello there";
      return <div>
        <GradeSelector />
      </div>;
    }
  });
