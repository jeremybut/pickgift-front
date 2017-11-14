import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Button } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import withI18n from './Ui/withI18n';
import ValidatedTextField from './Ui/ValidatedTextField';

class VillageForm extends Component {
  constructor(props) {
    super(props);

    const { village } = this.props;

    this.state = {
      canSubmitForm: false,
      isLoading: true,
      emails: []
    };

    this.enableFormSubmission = this.enableFormSubmission.bind(this);
    this.disableFormSubmission = this.disableFormSubmission.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputUsersChange = this.handleInputUsersChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: false });
  }

  enableFormSubmission() {
    this.setState({
      canSubmitForm: true,
    });
  }

  disableFormSubmission() {
    this.setState({
      canSubmitForm: false,
    });
  }

  handleFormSubmit(v) {
    const { emails } = this.state;

    const village = {
      displayName: v.displayName,
      maxInscriptionDate: v.maxInscriptionDate,
      eventDate: v.eventDate,
      emails,
    };
    this.props.onSubmit(village);
  }

  handleInputUsersChange(emails) {
    this.setState({emails})
  }

  render() {
    const { t, village } = this.props;
    const { canSubmitForm, isLoading } = this.state;

    return (
      <Form
        onSubmit={this.handleFormSubmit}
        onValid={this.enableFormSubmission}
        onInvalid={this.disableFormSubmission}
      >
        <div>
          <ValidatedTextField
            name="displayName"
            id="displayName"
            label={t('villages.form.displayName')}
            value={village.displayName}
            required
          />
          <TagsInput
            value={this.state.emails}
            onChange={this.handleInputUsersChange}
          />
          <Button
            className="btn-add"
            type="submit"
            disabled={!canSubmitForm}
          >
            {t('villages.form.submit')}
          </Button>
        </div>
      </Form>
    );
  }
}

export default withI18n(VillageForm);
