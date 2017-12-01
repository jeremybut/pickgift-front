import React, { Component } from 'react';
import { connect } from 'react-redux';

import VillageFormFirstPage from './VillageFormFirstPage';
import VillageFormSecondPage from './VillageFormSecondPage';
import VillageFormThirdPage from './VillageFormThirdPage';
import VillageFormFourthPage from './VillageFormFourthPage';
import './style.css';

class VillageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      npages: 4,
      emails: [],
      eventDate: null,
      eventDateFocused: false,
      maxInscriptionDate: null,
      maxInscriptionDateFocused: false,
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleFormSubmit(payload) {
    console.log(payload);
  }

  onTagsChange(emails) {
    this.setState({ emails: [ ...this.state.emails, emails ] });
  }

  renderForm(page) {
    switch (page) {
      case 1:
        return (<VillageFormFirstPage
          onSubmit={this.nextPage}
          current={1}
          total={4}
        />);
      case 2:
        return (<VillageFormSecondPage
          previousPage={this.previousPage}
          onTagsChange={this.onTagsChange}
          onSubmit={this.nextPage}
          emails={this.state.emails}
          current={2}
          total={4}
        />);
      case 3:
        return (<VillageFormThirdPage
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
          label='Event Date'
          eventDate={this.state.eventDate}
          eventDateFocused={this.state.eventDateFocused}
          onEventDateFocusChange={({ focused }) => this.setState({ eventDateFocused: focused })}
          onEventDateChange={date => this.setState({ eventDate: date })}
          current={3}
          total={4}
        />);
      case 4:
        return (<VillageFormFourthPage
          previousPage={this.previousPage}
          onSubmit={this.handleFormSubmit}
          label='Max Inscription Date'
          maxInscriptionDate={this.state.maxInscriptionDate}
          maxInscriptionDateFocused={this.state.maxInscriptionDateFocused}
          onMaxInscriptionDateFocusChange={({ focused }) => this.setState({ maxInscriptionDateFocused: focused })}
          onMaxInscriptionDateChange={date => this.setState({ maxInscriptionDate: date })}
          current={4}
          total={4}
        />);
      default:
        return '';
      }
    }

  render() {
    const { page, npages } = this.state;
    const progressStyle = {
      width: `${(100 / npages) * page}%`,
    };

    return (
      <div className="container-full-bg head">
        <div className="p-village-form">
          <div className="simform">
            <div className="simform-inner">
              <ol className="questions">
                { this.renderForm(page) }
              </ol>
              <div className="controls">
                <div
                  className="progress"
                  style={progressStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(VillageForm);
