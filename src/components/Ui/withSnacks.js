import React, { Component, PropTypes } from 'react';

const withSnacks = Wrapped => class extends Component {
  static contextTypes = {
    sendSnack: PropTypes.func.isRequired,
    sendImportantSnack: PropTypes.func.isRequired,
    clearSnacks: PropTypes.func.isRequired,
    sendPageview: PropTypes.func.isRequired,
    sendEvent: PropTypes.func.isRequired
  };

  render() {
    const {
      sendSnack, sendImportantSnack, clearSnacks,
      sendPageview, sendEvent,
    } = this.context;

    return (
      <Wrapped
        {...this.props}
        sendSnack={sendSnack}
        sendImportantSnack={sendImportantSnack}
        clearSnacks={clearSnacks}
        sendPageview={sendPageview}
        sendEvent={sendEvent}
      />
    );
  }
}

export default withSnacks;
