import React, { Component, PropTypes } from 'react';

const withI18n = Wrapped =>
  class extends Component {
    static contextTypes = {
      t: PropTypes.func.isRequired,
    };
    render() {
      const { t } = this.context;
      return <Wrapped {...this.props} t={t} />;
    }
  };

export default withI18n;
