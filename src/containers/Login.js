import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/logo.png';
import FormCredentials from './../components/Auth/FormCredentials';
import { loginUser } from '../actions/login';
import withI18n from '../components/Ui/withI18n';

const Authentication = styled.div`
  min-height: 100vh;
  background-color: ${ui('primary')};
  padding-top: ${spacing(3)};
  padding-bottom: ${spacing(3)};
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  max-width: ${props => props.maxWidth || '800px'};
  margin-left: ${props => props.marginLeft || 'auto'};
  margin-right: ${props => props.marginRight || 'auto'};
  padding-left: ${props => props.paddingLeft || spacing()};
  padding-right: ${spacing()};
  background-color: ${ui('secondary')};
`;

const Logo = styled.img`
  margin-bottom: ${spacing(2)};
  height: 96px;
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
