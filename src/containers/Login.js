import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/logo-app.svg';
import background from '../../static/media/authentication-background.jpg';
import FormCredentials from './../components/Auth/FormCredentials';
import { loginUser } from '../actions/login';
import withI18n from '../components/Ui/withI18n';

const Authentication = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-image: url(${background});
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  width: 50%;
  padding: 50px 0;
  border-radius: 5px;
  max-width: ${props => props.maxWidth || '400px'};
  background-color: ${ui('background')};
`;

const Logo = styled.img`
  margin-bottom: ${spacing(2)};
  height: 72px;
`;

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
              btnText='Connexion'
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
