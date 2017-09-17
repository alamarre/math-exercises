import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

require("./style.scss");

var GradeSelector = require("./GradeSelector");
var MaterialSelector = require("./MaterialSelector");
var MaterialLoader = require("./MaterialLoader");

var material = require("./material.json");

var div = document.createElement("div");
div.setAttribute("id", "app");
document.body.appendChild(div);

render((
  <Router history={hashHistory}>
    <Route path="/" component={GradeSelector}>
      <Route path="grades">
        <Route path=":grade" component={MaterialSelector}>
          <Route path=":material" component={MaterialLoader} />
        </Route>
      </Route>
      <Route path="exercises/:grade/:material" component={MaterialLoader} />
    </Route>
  </Router>
), document.getElementById('app'))