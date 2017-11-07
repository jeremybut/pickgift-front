import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

import withI18n from './withI18n';
import { dismissSnack } from '../../actions/snacks';

class SnackBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSnack: {},
      snackbarIsActive: false,
    };

    this.handleWillDismiss = this.handleWillDismiss.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  componentWillUpdate(nextProps) {
    const nextSnackId = nextProps.snacks.queue[0];
    const currentSnackId = this.props.snacks.queue[0];

    if (nextSnackId !== currentSnackId) {
      const nextSnack = nextProps.snacks.byId[nextSnackId];
      const switchActiveIn = currentSnackId ? 300 : 0;

      if (!currentSnackId) {
        this.setState({
          activeSnack: nextSnack,
          snackbarIsActive: true,
        });
        this.handleWillDismiss(nextSnack);
        return;
      }

      if (isEmpty(nextSnack)) {
        this.setState({ snackbarIsActive: false });
        setTimeout(
          () =>
            this.setState({
              activeSnack: {},
            }),
          switchActiveIn,
        );
      } else {
        this.setState({ snackbarIsActive: false });
        setTimeout(
          () =>
            this.setState({
              activeSnack: nextSnack,
              snackbarIsActive: true,
            }),
          switchActiveIn,
        );
        this.handleWillDismiss(nextSnack);
      }
    }
  }

  handleWillDismiss(snack) {
    if (snack.duration) {
      setTimeout(() => this.handleDismiss(snack.id), snack.duration);
    }
  }

  handleDismiss(snackId) {
    this.props.dispatchDismissSnack(snackId);
  }

  render() {
    const { activeSnack, snackbarIsActive } = this.state;
    const { t } = this.props;

    return (
      <dialog
        aria-hidden={!snackbarIsActive}
        className={classNames({
          'c-snackbar': true,
          'c-snackbar--active': snackbarIsActive,
        })}
      >
        <p className="c-snackbar__message">
          {Boolean(activeSnack.message) && t(activeSnack.message)}
        </p>
        <button
          disabled={!snackbarIsActive}
          onClick={() => this.handleDismiss(activeSnack.id)}
          className={classNames({
            'c-snackbar__action': true,
            [`c-snackbar__action--${activeSnack.type}`]: !!activeSnack.type,
          })}
        >
          {activeSnack.action || 'ok'}
        </button>
      </dialog>
    );
  }
}

const mapStateToProps = state => ({
  snacks: state.snacks,
});

const mapDispatchToProps = dispatch => ({
  dispatchDismissSnack: id => dispatch(dismissSnack(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(SnackBar));
