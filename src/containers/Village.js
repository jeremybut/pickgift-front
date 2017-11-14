import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camelizeKeys } from 'humps';

import withI18n from '../components/Ui/withI18n';
import { fetchVillage } from '../actions/village';

class Village extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatchFetchVillage(this.props.params.id);
  }

  render() {
    const { villages } = this.props;
    const { villageById } = villages;
    const village = villageById[this.props.params.id]

    return (
      <pre>{JSON.stringify(village, null, 2)}</pre>
    );
  }
}

const mapStateToProps = state => ({
  villages: camelizeKeys(state.villages),
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchVillage: (id) => dispatch(fetchVillage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(Village));
