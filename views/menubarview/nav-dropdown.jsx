// var BootStrap      = require('./assets/bootstrap');
var DropdownButton = BootStrap.DropdownButton;

var NavDropdown = React.createClass({
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  },

  render() {
    return (
        <div>
        
       
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
         
    
      </div>
    );
  }
});

module.exports = NavDropdown

// React.render(<NavDropdown />, document.getElementById('nav-dropdown'));