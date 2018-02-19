import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarComponent extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.snackbarmessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

SnackbarComponent.okCallback = null;

export default SnackbarComponent;
