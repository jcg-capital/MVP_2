/** @jsx React.DOM */

var ContainedModal = React.createClass({
  render () {
    return (
      <Modal {...this.props} title='Contained Modal' animation>
        <div className='modal-body'>
          Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
        </div>
        <div className='modal-footer'>
          <Button onClick={this.props.onRequestHide}>Close</Button>
        </div>
      </Modal>
    );
  }
});

var ModalTriggerOne = React.createClass({
  render() {
    return (
      <div className='modal-container' style={{height: 200}}>
        <ModalTrigger modal={<ContainedModal container={this} />} container={this}>
          <Button bsStyle='primary' bsSize='large'>Launch contained modal</Button>
        </ModalTrigger>
      </div>
    );
  }
});

module.exports = ContainedModal
module.exports = ModalTriggerOne
// React.render(<ModalTriggerOne />, document.getElementById('modal'));
