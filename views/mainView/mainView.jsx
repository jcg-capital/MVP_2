/** @jsx React.DOM */
'use strict';

var MenuBar = require('./menubarview/MenuBarView.js')
var MenuItems = require('./menubarview/MenuItems.js')

var Chart = require('./graphview/chart')
var ChartOptions = require('./graphview/chartoptions')


var App = React.createClass({
  render: function(){
    console.log(MenuItems)
    return (
      React.createElement(Chart, ChartOptions)
    )
  }
});

// React.render(React.createElement(MenuBar, MenuItems), document.getElementById('THEAPP'))
React.render(<App />, document.body);