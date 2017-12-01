import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decamelizeKeys } from 'humps';

import { createVillage } from '../actions/village';
import VillageForm from '../components/Villages/VillageForm';
import withSnacks from '../components/Ui/withSnacks';
import withI18n from '../components/Ui/withI18n';

class NewVillage extends Component {
  constructor(props) {
    super(props);
    this.createVillage = this.createVillage.bind(this);
  }

  createVillage(village) {
    const { canSubmitForm: omit, ...payload } = village;
    this.props.dispatchCreateVillage(decamelizeKeys(payload));
  }

  render() {
    const village = {};

    return (
      <VillageForm
        village={village}
        onSubmit={this.createVillage}
      />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatchCreateVillage: village => dispatch(createVillage(village)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withSnacks(withI18n(NewVillage)));
