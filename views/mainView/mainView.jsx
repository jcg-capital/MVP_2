/** @jsx React.DOM */
'use strict';

var MenuBar = require('./menubarview/MenuBarView.js');
var MenuItems = require('./menubarview/MenuItems.js');

var Chart = require('./graphview/chart');
var ChartOptions = require('./graphview/chartoptions');


var App = React.createClass({
  render: function(){
    console.log(MenuItems);
    return (
    	<div>
	    	<div id='jcgCapitalChart'></div>
		    <div id='jcgCapitalMenu'></div>
		    <div id='jcgCapitalEditor'></div>
	    </div>
    )
	
		// React.createElement(MenuBar, MenuItems)
  }
});
React.render(<App />, document.body);
React.render(React.createElement(Chart, ChartOptions), document.getElementById('jcgCapitalChart'));
React.render(<MenuBar config={MenuItems.config} />, document.getElementById('jcgCapitalMenu'));