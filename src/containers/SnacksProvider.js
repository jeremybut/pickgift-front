import React, { Component, PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { sendSnack, sendImportantSnack, clearSnacks } from '../actions/snacks';
import SnackBar from '../components/Ui/SnackBar';

class SnacksProvider extends Component {
  static childContextTypes = {
    sendSnack: PropTypes.func.isRequired,
    sendImportantSnack: PropTypes.func.isRequired,
    clearSnacks: PropTypes.func.isRequired,
    sendPageview: PropTypes.func.isRequired,
    sendEvent: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.sendSnack = this.sendSnack.bind(this);
    this.sendImportantSnack = this.sendImportantSnack.bind(this);
    this.clearSnacks = this.clearSnacks.bind(this);
    this.sendPageview = this.sendPageview.bind(this);
    this.sendEvent = this.sendEvent.bind(this);

    this.state = {
      lastSentAt: null,
      throttleLimit: 500,
      ga: window.ga,
    };
  }

  /**
   * Send Pageview to Google analytics, with a throttling value to prevent
   * double instantaneous router actions to be tracked.
   *
   * @param {string} page URI of page
   */
  sendPageview(page) {
    if (this.shouldThrottle()) {
      return;
    }
    this.state.ga('send', 'pageview', { page });
    this.setState({
      lastSentAt: moment(),
    });
  }

  /**
   * Send Event to Google analytics, with a throttling value to prevent
   * double instantaneous events actions to be tracked.
   *
   * @param {string} page URI of page
   */
  sendEvent(category, action, label, value) {
    if (this.shouldThrottle()) {
      return;
    }
    this.state.ga('send', 'event', category, action, label, value);
    this.setState({
      lastSentAt: moment(),
    });
  }

  shouldThrottle() {
    return (
      !!this.state.lastSentAt &&
      moment().diff(this.state.lastSentAt) < this.state.throttleLimit
    );
  }

  sendSnack(snack) {
    const duration = snack.duration === false ? false : snack.duration || 5000;
    const type = snack.type || 'info';
    this.props.dispatchSendSnack({ ...snack, type, duration });
  }

  sendImportantSnack(snack) {
    this.props.dispatchSendImportantSnack({ snack });
  }

  clearSnacks() {
    this.props.dispatchClearSnacks();
  }

  getChildContext() {
    return {
      sendSnack: this.sendSnack,
      clearSnacks: this.clearSnacks,
      sendImportantSnack: this.sendImportantSnack,
      sendPageview: this.sendPageview,
      sendEvent: this.sendEvent,
    };
  }

  render() {
    return (
      <div>
        {Children.only(this.props.children)}
        <SnackBar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSendSnack: snack => dispatch(sendSnack(snack)),
  dispatchSendImportantSnack: snack => dispatch(sendImportantSnack(snack)),
  dispatchClearSnacks: () => dispatch(clearSnacks()),
});

export default connect(null, mapDispatchToProps)(SnacksProvider);
