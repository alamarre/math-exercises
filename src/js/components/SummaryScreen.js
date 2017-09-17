import React from 'react'

import { Link } from 'react-router'

const SummaryScreen = React.createClass({
  
  render() {
    
    return (
        <div>
            <div>{this.props.children}</div>
            <button onClick={this.props.playAgain}>Play Again</button>
            <Link to="/">Choose a new activity</Link>
        </div>
    )
  }
})

module.exports = SummaryScreen