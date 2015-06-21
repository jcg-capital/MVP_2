/** @jsx React.DOM */
'use strict';
//var React          = require('react');
var MenuBar        = require('./menubarview/MenuBarView.js');
var MenuItems      = require('./menubarview/MenuItems.js');
var Chart          = require('./graphview/chart');
var ChartOptions   = require('./graphview/chartoptions');
// TODO: complete some extra pages
var Home           = React.createClass({render:function(){return <h1>Home</h1>}})
var Errorpage      = React.createClass({render:function(){return <h1>ErrorPage</h1>}});
//var BootStrap      = require('./assets/bootstrap');

var Router         = require('react-router');
var NotFoundRoute  = Router.NotFoundRoute;
//var Link           = Router.Link;
var Route          = Router.Route;
var DefaultRoute   = Router.DefaultRoute;
//var RouteHandler   = Router.RouteHandler;


// ***********************************//
// Create the main App class 
// This will most likely change
// ***********************************//
var App = React.createClass({
  render: function(){
    console.log('Inside App');
    return (
      <div>
        <div id='jcgCapitalChart'></div>
        <div id='jcgCapitalMenu'></div>
        <div id='jcgCapitalEditor'></div>
      </div>
    )
  }
});

// ***********************************//
// some example routes to be used with react-router
// FIXME: these exactly work?
// ***********************************//
var routes = (
  <Route name='app' path='/' handler={ App } >
    <Route name='chart' path='/chart' handler={ Chart } />
    <Route name='menubar' path='/menubar' handler={ MenuBar } />
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ Errorpage } />
  </Route>
);


// ***********************************//
// see https://github.com/idealists/idea-list/blob/master/client/app.js
// ***********************************//
Router.run(routes, function (Handler) {
    React.render(<Handler MenuItems />, document.getElementById('main'));
});


// React.render(<App />, document.body);
// React.render(React.createElement(Chart, ChartOptions), document.getElementById('jcgCapitalChart'));
// React.render(<MenuBar config={MenuItems.config} />, document.getElementById('jcgCapitalMenu'));