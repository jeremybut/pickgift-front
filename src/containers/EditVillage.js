import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camelizeKeys } from 'humps';

import VillageForm from '../components/Villages/VillageForm';
import withI18n from '../components/Ui/withI18n';
import { fetchVillage, updateVillage } from '../actions/village';

class EditVillage extends Component {
  constructor(props) {
    super(props);
    this.updateVillage = this.updateVillage.bind(this);
  }

  componentDidMount() {
    this.props.dispatchFetchVillage(this.props.params.id);
  }

  updateVillage(village) {
    this.props.dispatchUpdateVillage(this.props.params.id, village)
  }

  render() {
    const { villageById } = this.props;
    const { id } = this.props.params;
    const village = camelizeKeys(villageById[id]);

    return (
      <VillageForm village={village} onSubmit={this.updateVillage} />
    );
  }
}

const mapStateToProps = state => ({
  villageById: state.villages.villageById,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchVillage: (id) => dispatch(fetchVillage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(EditVillage));
