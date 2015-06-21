/** @jsx React.DOM */
'use strict';
var React          = require('react/addons');
var MenuBar        = require('./menubarview/MenuBarView.js');
var MenuItems      = require('./menubarview/MenuItems.js');
var Chart          = require('./graphview/chart');
var ChartOptions   = require('./graphview/chartoptions');

var BootStrap      = require('./assets/bootstrap');

var Router         = require('react-router');
var NotFoundRoute  = Router.NotFoundRoute;
var Link           = Router.Link;
var Route          = Router.Route;
var DefaultRoute   = Router.DefaultRoute;
var RouteHandler   = Router.RouteHandler;

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
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="chart" path="/chart" handler={Chart}>
    <Route name="menubar" path="/menubar" handler={MenuBar}>
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={Errorpage} />
  </Route>
)



Router.run(routes, function (Handler) {
  if (Handler){
    console.log(Handler);
    React.render(<Handler />, document.getElementById('main'));
  }
})


// React.render(<App />, document.body);
// React.render(React.createElement(Chart, ChartOptions), document.getElementById('jcgCapitalChart'));
// React.render(<MenuBar config={MenuItems.config} />, document.getElementById('jcgCapitalMenu'));