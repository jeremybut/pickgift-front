import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/logo-app.svg';
import FormCredentials from '../components/Auth/FormCredentials';
import { signup } from '../actions/signup';
import withI18n from '../components/Ui/withI18n';
import { Authentication, Box, Logo } from '../components/Auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      page: 1,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleFormSubmit(credentials) {
    this.props.dispatchSignupUser(credentials);
  }

  render() {
    const { page } = this.state;
    return (
      <Authentication>
        <Container tight>
          {page === 1 &&
            <Box>
              <AlignCenter>
                <Logo src={logo} alt="Logo PickGift" />
              </AlignCenter>
              <FormCredentials
                onSubmit={this.handleFormSubmit}
                btnText='S’inscrire'
                action='signup'
              />
            </Box>
          }
        </Container>
      </Authentication>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSignupUser: credentials => dispatch(signup(credentials)),
});

export default connect(null, mapDispatchToProps)(withI18n(Signup));
