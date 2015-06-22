/** @jsx React.DOM */
'use strict';
//var React          = require('react');
var MenuBar        = require('./menubarview/MenuBarView.js');
var MenuItems      = require('./menubarview/MenuItems.js');
var Chart          = require('./graphview/chart');
var ChartOptions   = require('./graphview/chartoptions');
var ContainedModal = require('./mainView/containedmodal.js');

var Editor         = require('./codeeditorview/CodeMirror')
// TODO: complete some extra pages
var Home           = React.createClass({render:function(){return <h1>Home</h1>}})
var Errorpage      = React.createClass({render:function(){return <h1>ErrorPage</h1>}});

// *******************************//
// BootStrap related elements
// *******************************//l


var ModalTrigger   = BootStrap.ModalTrigger;
var Col            = BootStrap.Col;
var Row            = BootStrap.Row;
var Grids          = BootStrap.Grids;
var Grid           = BootStrap.Grid;
var Nav            = BootStrap.Nav;
var Navbar         = BootStrap.Navbar;
var BootStrap      = require('./assets/bootstrap');
var ButtonToolbar  = BootStrap.ButtonToolbar;
var Button         = BootStrap.Button;
var ButtonGroup    = BootStrap.ButtonGroup;
var DropdownButton = BootStrap.DropdownButton;
var MenuItem       = BootStrap.MenuItem;
var Accordion      = BootStrap.Accordion;
var Panel          = BootStrap.Panel;
var Modal          = BootStrap.Modal;
var Input          = BootStrap.Input;
var ButtonInput    = BootStrap.ButtonInput;
// *******************************//


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
  items: {
    nameHere: ( <h3>Panel nameHere</h3> ),
    'modalStyle': {
      'position': 'relative',
      'bottom': '0px',
    },
  },
  render: function(){
    console.log('Inside App');
    return (

  <div>


     
     <div>
        <Navbar brand={<a href="#">JCG-Capital</a>}>
          <Nav>
              <DropdownButton bsStyle='primary' eventKey={3} title='File'>          
                  <MenuItem eventKey='1'>Action</MenuItem>
                  <MenuItem eventKey='2'>Another action</MenuItem>
              </DropdownButton>
              <DropdownButton bsStyle='primary' eventKey={3} title='Edit'>          
                  <MenuItem eventKey='1'>Action</MenuItem>
                  <MenuItem eventKey='2'>Another action</MenuItem>
              </DropdownButton>
              <DropdownButton bsStyle='primary' eventKey={3} title='Preferences'>          
                  <MenuItem eventKey='1'>Action</MenuItem>
                  <MenuItem eventKey='2'>Another action</MenuItem>
              </DropdownButton>
          </Nav>
        </Navbar>
      </div>

     <div className="container">
        <div id='jcgCapitalChart'>
          <Chart chartModel={ChartOptions.chartModel} seriesModel={ChartOptions.seriesModel} />
        </div>
      </div>




  
   
<Grid>
    <Row className='show-grid'>
      <Col xs={6} md={6}><code> 
        { <Panel header='Codes Editor'>
                <Editor />
              </Panel>}


      </code></Col>
      <Col xs={6} md={6}><code>{
              <Panel header='Chart'>
                Panel content
              </Panel>
      } </code></Col>
    </Row>
  </Grid>

  <div id="modal">
    <ModalTriggerOne />
  </div>



</div>
     
    )
  }
});

// ***********************************//
// some example routes to be used with react-router
// FIXME: these exactly work?
// ***********************************//
// var routes = (
//   <Route name='app' path='/' handler={ App } >
//     <Route name='chart' path='/chart' handler={ Chart } />
//     <Route name='menubar' path='/menubar' handler={ MenuBar } />
//     <DefaultRoute handler={ Home } />
//     <NotFoundRoute handler={ Errorpage } />
//   </Route>
// );


// ***********************************//
// see https://github.com/idealists/idea-list/blob/master/client/app.js
// ***********************************//
// Router.run(routes, function (Handler) {
//     React.render(<Handler MenuItems />, document.getElementById('main'));
// });


React.render(<App />, document.body);
//React.render(React.createElement(Chart, ChartOptions), document.getElementById('jcgCapitalChart'));
//React.render(<MenuBar config={MenuItems.config} />, document.getElementById('jcgCapitalMenu'));
//React.render(<Editor />, document.getElementById('jcgCapitalEditor'));
