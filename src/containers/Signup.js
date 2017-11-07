import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ui, Container, spacing, AlignCenter } from '../ui';
import logo from '../../static/media/logo.png';
import FormCredentials from '../components/Auth/FormCredentials';
import { signup } from '../actions/signup';
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
                btnText='Valider'
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
