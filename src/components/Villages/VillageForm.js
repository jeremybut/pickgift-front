import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'formsy-react';
import { SingleDatePicker } from 'react-dates';
import TagsInput from 'react-tagsinput';

import ValidatedTextField from '../Ui/ValidatedTextField';

class VillageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      eventDate: null,
      eventDateFocused: false,
      maxInscriptionDate: null,
      maxInscriptionDateFocused: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.enableFormSubmission = this.enableFormSubmission.bind(this);
    this.disableFormSubmission = this.disableFormSubmission.bind(this);
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

  handleFormSubmit(payload) {
    console.log(payload);
  }

  onTagsChange(emails) {
    this.setState({ emails: [ ...this.state.emails, emails ] });
  }

  render() {
    const { canSubmitForm } = this.state;
    const EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

    const { handleSubmit, village } = this.props;
    return (
      <Form
        onSubmit={handleSubmit}
        onValid={this.enableFormSubmission}
        onInvalid={this.disableFormSubmission}
      >
        <ValidatedTextField
          name="displayName"
          id="displayName"
          label='Village name'
          value={village.displayName}
          required
        />
        <span>
          <label htmlFor='Invite your villagers'>Invite your villagers</label>
        </span>
        <TagsInput
          value={this.state.emails}
          addKeys={[9, 13, 32, 186, 188]}
          onChange={this.onTagsChange}
          validationRegex={EMAIL_VALIDATION_REGEX}
          placeholder=''
          pasteSplit={data => {
            return data.replace(/[\r\n,;]/g, ' ').split(' ').map(d => d.trim())
          }}
          addOnPaste
          autoFocus
          onlyUnique
        />
        <SingleDatePicker
          date={this.props.eventDate}
          onDateChange={date => this.setState({ eventDate: date })}
          focused={this.eventDateFocused}
          onFocusChange={({ focused }) => this.setState({ eventDateFocus: focused })}
        />
        <SingleDatePicker
          date={this.props.maxInscriptionDate}
          onDateChange={date => this.setState({ maxInscriptionDate: date })}
          focused={this.maxInscriptionDateFocused}
          onFocusChange={({ focused }) => this.setState({ maxInscriptionDateFocus: focused })}
        />
        <button disabled={!canSubmitForm} type="submit">Valider</button>
      </Form>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(VillageForm);
