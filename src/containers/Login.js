import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/logo-app.svg';
import FormCredentials from './../components/Auth/FormCredentials';
import { loginUser } from '../actions/login';
import withI18n from '../components/Ui/withI18n';
import { Authentication, Box, Logo } from '../components/Auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(credentials) {
    this.props.dispatchLoginUser(credentials);
  }

  render() {
    return (
      <Authentication>
        <Container tight>
          <Box>
            <AlignCenter>
              <Logo src={logo} alt="Logo PickGift" />
            </AlignCenter>
            <FormCredentials
              onSubmit={this.handleFormSubmit}
              action='login'
              btnText='Se connecter'
            />
          </Box>
        </Container>
      </Authentication>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchLoginUser: credentials => dispatch(loginUser(credentials)),
});

export default connect(null, mapDispatchToProps)(withI18n(Login));
