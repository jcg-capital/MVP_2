/** @jsx React.DOM */
'use strict';

var MenuBar = require('../menubarview/MenuBarView')
var MenuItems = require('../menubarview/MenuItems')

var Chart = require('../graphview/chart.jsx')
var ChartOptions = require('../graphview/chartoptions')



var App = React.createClass({displayName: "App",
  render: function(){
    console.log(MenuItems)
    return (
      React.createElement(Chart, ChartOptions)
      //React.createElement(Chart, ChartOptions)

    )
  }
});

React.render(React.createElement(App, null), document.getElementById('THEAPP'));
