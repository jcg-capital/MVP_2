/** @jsx React.DOM */
'use strict';
//var React          = require('react');
var MenuBar        = require('./menubarview/MenuBarView.js');
var MenuItems      = require('./menubarview/MenuItems.js');
var Chart          = require('./graphview/chart');
var ChartOptions   = require('./graphview/chartoptions');
//var Editor         = require('./codeeditorview/CodeMirror')
// TODO: complete some extra pages
var Home           = React.createClass({render:function(){return <h1>Home</h1>}})
var Errorpage      = React.createClass({render:function(){return <h1>ErrorPage</h1>}});

// *******************************//
// BootStrap related elements
// *******************************//
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
        <div id='jcgCapitalChart'>
          <Chart chartModel={ChartOptions.chartModel} seriesModel={ChartOptions.seriesModel} />
        </div>
        <div id='jcgCapitalMenu'>
          <MenuBar config={MenuItems.config} />
        </div>

{/* Standard button */}
        <ButtonToolbar>
          <Button>Default</Button>
          <Button bsStyle='primary'>Primary</Button>
          <Button bsStyle='success'>Success</Button>
          <Button bsStyle='info'>Info</Button>
          <Button bsStyle='warning'>Warning</Button>
          <Button bsStyle='danger'>Danger</Button>
          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle='link'>Link</Button>
        </ButtonToolbar>

{/* Button Grouping */}
         <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
{/* Two buttons and a dropdown */}
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title='Dropdown'>
              <MenuItem eventKey='1'>Dropdown link</MenuItem>
              <MenuItem eventKey='2'>Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
{/* Vertically Aligned Buttons */}
          <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title='Dropdown'>
              <MenuItem eventKey='1'>Dropdown link</MenuItem>
              <MenuItem eventKey='2'>Dropdown link</MenuItem>
            </DropdownButton>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title='Dropdown'>
              <MenuItem eventKey='1'>Dropdown link</MenuItem>
              <MenuItem eventKey='2'>Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title='Dropdown'>
              <MenuItem eventKey='1'>Dropdown link</MenuItem>
              <MenuItem eventKey='2'>Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>


{/* Panel with header */}
            <div>
              <Panel header='Panel heading without nameHere'>
                Panel content
              </Panel>
              <Panel header={this.items.nameHere}>
                Panel content
              </Panel>
            </div>

{/* Accordion example  */}
            <Accordion>
              <Panel header='Collapsible Group Item 1' eventKey='1'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Panel>
              <Panel header='Collapsible Group Item 2' eventKey='2'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Panel>
              <Panel header='Collapsible Group Item 3' eventKey='3'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Panel>
            </Accordion>

 <form>
    <Input type='text' label='Text' placeholder='Enter text' />
    <Input type='email' label='Email Address' placeholder='Enter email' />
    <Input type='password' label='Password' />
    <Input type='file' label='File' help='[Optional] Block level help text' />
    <Input type='checkbox' label='Checkbox' checked readOnly />
    <Input type='radio' label='Radio' checked readOnly />
    <Input type='select' label='Select' placeholder='select'>
      <option value='select'>select</option>
      <option value='other'>...</option>
    </Input>
    <Input type='select' label='Multiple Select' multiple>
      <option value='select'>select (multiple)</option>
      <option value='other'>...</option>
    </Input>
    <Input type='textarea' label='Text Area' placeholder='textarea' />
    <ButtonInput value='Button Input' />
    <ButtonInput type='reset' value='Reset Button' />
    <ButtonInput type='submit' value='Submit Button' />
  </form>












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
