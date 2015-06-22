'use strict';
var Codemirror = require('react-code-mirror');
// var options = {
//   mode: 'javascript',
//   theme: 'cm-s-monokai',
//   lineNumbers: true,
// }
// var Editor = React.createClass({
//     getInitialState: function() {
//         return {
//             code: 'function add(a, b) {\n' +
//                   '  return a + b;\n' +
//                   '}'
//         };
//     },
//     updateCode: function(newCode) {
//         console.log('From the editor',newCode)
//         this.setState({
//             code: newCode
//         });
//     },
//     render: function() {
//         var options = {
//             lineNumbers: true
//         };
//         return (
//           <div>
//             <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
//           </div>
//           )
//     }
// });

// // React.render(<App />, document.getElementById('app'));
// module.exports = Editor

var CodeMirror = React.createFactory(require('../../'));

var div = React.createFactory('div');
var h1 = React.createFactory('h1');
var p = React.createFactory('p');
var pre = React.createFactory('pre');
var code = React.createFactory('code');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      src: 'function add(a, b) {\n' +
           '  return a + b;\n' +
           '}'
    };
  },
  render: function () {
    return div({},
      h1({}, 'Using "value" with "onChange"'),
      p({}, 'This creates a typical, editable code mirror editor that responds to changes.'),
      CodeMirror({
        style: {border: '1px solid black'},
        textAreaClassName: ['form-control'],
        textAreaStyle: {minHeight: '10em'},
        value: this.state.src,
        mode: 'javascript',
        theme: 'solarized',
        lineNumbers: true,
        onChange: function (e) {
          this.setState({src: e.target.value});
        }.bind(this)
      }),
      h1({}, 'Just a pre/code'),
      p({}, 'Just so you can see the output.'),
      pre({}, code({},  this.state.src))
    );
  }
});